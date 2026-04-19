import React, { useEffect, useRef, useState } from 'react';

const DEFAULT_IFRAME_ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';

export type LazyYoutubeEmbedProps = {
  /** YouTube video id from `watch?v=` or `/embed/` URLs */
  videoId: string;
  title: string;
  /** Classes on the wrapper that is observed for visibility */
  className?: string;
  iframeClassName?: string;
  /**
   * When true (default), iframe mounts with muted autoplay once visible
   * (`autoplay=1&mute=1`) so browsers allow playback without a user gesture.
   */
  autoplayOnVisible?: boolean;
  /** Optional extra embed query params (e.g. `rel=0` or `start=30`) */
  embedParams?: Record<string, string | number | boolean>;
  rootMargin?: string;
  threshold?: number | number[];
  /** If true, load the iframe immediately (no intersection wait) */
  eager?: boolean;
  allow?: string;
};

function buildEmbedSrc(
  videoId: string,
  autoplayOnVisible: boolean,
  embedParams?: Record<string, string | number | boolean>
): string {
  const params = new URLSearchParams();
  if (embedParams) {
    for (const [k, v] of Object.entries(embedParams)) {
      params.set(k, String(v));
    }
  }
  params.set('playsinline', params.get('playsinline') ?? '1');
  if (autoplayOnVisible) {
    params.set('autoplay', '1');
  }
  const q = params.toString();
  return `https://www.youtube.com/embed/${videoId}${q ? `?${q}` : ''}`;
}

/**
 * Defers loading a YouTube iframe until the wrapper is near the viewport.
 * Optionally starts muted autoplay when it becomes visible.
 */
export const LazyYoutubeEmbed: React.FC<LazyYoutubeEmbedProps> = ({
  videoId,
  title,
  className,
  iframeClassName,
  autoplayOnVisible = true,
  embedParams,
  rootMargin = '0px 0px -8% 0px',
  threshold = 0.2,
  eager = false,
  allow = DEFAULT_IFRAME_ALLOW,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [embedSrc, setEmbedSrc] = useState<string | null>(() =>
    eager ? buildEmbedSrc(videoId, autoplayOnVisible, embedParams) : null
  );

  const embedParamsKey = JSON.stringify(embedParams ?? {});

  useEffect(() => {
    if (eager || embedSrc) return;

    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setEmbedSrc(buildEmbedSrc(videoId, autoplayOnVisible, embedParams));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setEmbedSrc(buildEmbedSrc(videoId, autoplayOnVisible, embedParams));
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager, embedSrc, videoId, autoplayOnVisible, embedParamsKey, rootMargin, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {embedSrc ? (
        <iframe
          src={embedSrc}
          title={title}
          frameBorder={0}
          allow={allow}
          allowFullScreen
          className={iframeClassName}
        />
      ) : null}
    </div>
  );
};
