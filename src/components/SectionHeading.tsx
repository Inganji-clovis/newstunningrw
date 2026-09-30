import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface SectionHeadingProps {
  tag: string;
  title: string;
  text?: string;
  href?: string;
  link?: string;
}

export function SectionHeading({ tag, title, text, href, link }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow red">{tag}</p>
        <h2>{title}</h2>
        {text && <p className="section-intro">{text}</p>}
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {link || 'Explore more'}
          <ArrowUpRight size={18} />
        </Link>
      )}
    </div>
  );
}
