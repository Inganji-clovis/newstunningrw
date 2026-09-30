import Link from 'next/link';

interface PageHeroProps {
  title: string;
  tag: string;
  text: string;
  image: string;
  breadcrumb?: string;
}

export function PageHero({ title, tag, text, image, breadcrumb }: PageHeroProps) {
  const imgSrc = image.startsWith('/assets') ? image : `/assets/${image}.webp`;

  return (
    <>
      <div className="breadcrumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        {breadcrumb && (
          <>
            <Link href={`/${breadcrumb.toLowerCase()}`}>{breadcrumb}</Link>
            <span>/</span>
          </>
        )}
        <span>{title}</span>
      </div>
      <section className="page-hero">
        <img src={imgSrc} alt="" />
        <div></div>
        <article>
          <p className="eyebrow">{tag}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </article>
      </section>
    </>
  );
}
