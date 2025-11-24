import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import cardStyles from '../styles/card.module.css';
import timelineStyles from '../styles/timeline.module.css';

const timelineItems = [
	{
		date: '1950s-1960s',
		title: 'Brutalist Architecture Origins',
		description:
			'Emerging from post-war modernism, this architectural style embraced raw, exposed concrete (béton brut), massive forms, and a stark, functionalist approach. It valued honesty of materials over ornamentation.',
		image: '/images/brutalism.jpg',
		pullQuote: 'Honesty of materials, above all.',
	},
	{
		date: '1980s-1990s',
		title: 'Swiss Typography Influence',
		description:
			'The International Typographic Style, with its clean, grid-based layouts and sans-serif fonts like Helvetica, brought a sense of order and objectivity that contrasts with and informs neo-brutalism\'s structured chaos.',
		image: '/images/swiss-typography.jpg',
		pullQuote: 'Order in chaos.',
	},
	{
		date: '1990s-2000s',
		title: 'Early Web and Browser Defaults',
		description:
			'A raw, unstyled digital landscape defined by Times New Roman, blue hyperlinks, and basic HTML tables. This era\'s unpolished, "anything goes" aesthetic is a key spiritual predecessor to neo-brutalism.',
		image: '/images/early-web.jpg',
		pullQuote: 'The beauty of the unstyled.',
	},
	{
		date: '2010s',
		title: 'Skeuomorphism to Flat Design',
		description:
			'The design world swung from hyper-realistic interfaces to minimalist, two-dimensional styles. Neo-brutalism reacts to the perceived sterility of flat design by reintroducing texture, weight, and a raw, handmade feel.',
		image: '/images/flat-design.jpg',
		pullQuote: 'A rebellion against flat.',
	},
	{
		date: '2020s',
		title: 'Rise of Figma and Gumroad',
		description:
			'Platforms like Figma and Gumroad empower creators with direct-to-audience tools, fostering a design ethos that is raw, functional, and unapologetic. Their bold typography and high-contrast UIs are hallmarks of modern neo-brutalism.',
		image: '/images/figma-gumroad.jpg',
		pullQuote: 'The creator economy\'s aesthetic.',
	},
];

export default function TimelineScroller() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
	const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
	const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

	const handleCardClick = useCallback((index: number) => {
		setExpandedIndex(prev => prev === index ? null : index);
	}, []);

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = parseInt(entry.target.getAttribute('data-index') || '0');
					setVisibleItems(prev => new Set(prev).add(index));
				}
			});
		}, observerOptions);

		itemRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className={timelineStyles.timeline_container}>
			<div className={timelineStyles.timeline_wrapper}>
				{timelineItems.map((item, index) => (
					<div
						key={index}
						ref={(el) => {
							itemRefs.current[index] = el;
						}}
						data-index={index}
						className={`${timelineStyles.timeline_item} ${
							index % 2 === 0 ? timelineStyles.left : timelineStyles.right
						} ${visibleItems.has(index) ? timelineStyles.visible : ''}`}
					>
						<div className={timelineStyles.timeline_dot}></div>
						<button
							type="button"
							className={timelineStyles.timeline_item_content}
							onClick={() => handleCardClick(index)}
							aria-expanded={expandedIndex === index}
							aria-controls={`expanded-${index}`}
						>
							<article
								className={`${cardStyles.neo_brutalist_card} ${
									expandedIndex === index ? timelineStyles.expanded : ''
								}`}
								style={{
									backgroundColor: 'var(--paper-white)',
									color: 'var(--foundation-black)',
									padding: '14px',
									display: 'flex',
									flexDirection: 'column',
									gap: '10px'
								}}
							>
								<time
									style={{
										fontFamily: 'var(--mono-font)',
										fontSize: '0.85rem',
										margin: 0,
										display: 'block'
									}}
								>
									{item.date}
								</time>
								<h3 style={{ margin: 0, fontSize: 'clamp(1.05rem, 1rem + 0.8vw, 1.25rem)', lineHeight: '1.2' }}>{item.title}</h3>
								<p style={{ margin: 0, fontSize: 'clamp(0.9rem, 0.85rem + 0.4vw, 1rem)', lineHeight: '1.5' }}>{item.description}</p>
								{expandedIndex === index && (
									<div
										id={`expanded-${index}`}
										className={timelineStyles.expanded_content}
										style={{ marginTop: '12px' }}
									>
										<Image
											src={item.image}
											alt={item.title}
											width={400}
											height={250}
											style={{
												objectFit: 'cover',
												border: '4px solid var(--foundation-black)',
												marginBottom: '16px',
											}}
										/>
										<blockquote className={timelineStyles.pull_quote}>
											{item.pullQuote}
										</blockquote>
									</div>
								)}
							</article>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}