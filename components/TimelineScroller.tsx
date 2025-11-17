import cardStyles from '../styles/card.module.css';
import timelineStyles from '../styles/timeline.module.css';

const timelineItems = [
	{
		date: '1950s-1960s',
		title: 'Brutalist Architecture Origins',
		description:
			'Emerging from post-war modernism, this architectural style embraced raw, exposed concrete (béton brut), massive forms, and a stark, functionalist approach. It valued honesty of materials over ornamentation.',
	},
	{
		date: '1980s-1990s',
		title: 'Swiss Typography Influence',
		description:
			'The International Typographic Style, with its clean, grid-based layouts and sans-serif fonts like Helvetica, brought a sense of order and objectivity that contrasts with and informs neo-brutalism\'s structured chaos.',
	},
	{
		date: '1990s-2000s',
		title: 'Early Web and Browser Defaults',
		description:
			'A raw, unstyled digital landscape defined by Times New Roman, blue hyperlinks, and basic HTML tables. This era\'s unpolished, "anything goes" aesthetic is a key spiritual predecessor to neo-brutalism.',
	},
	{
		date: '2010s',
		title: 'Skeuomorphism to Flat Design',
		description:
			'The design world swung from hyper-realistic interfaces to minimalist, two-dimensional styles. Neo-brutalism reacts to the perceived sterility of flat design by reintroducing texture, weight, and a raw, handmade feel.',
	},
	{
		date: '2020s',
		title: 'Rise of Figma and Gumroad',
		description:
			'Platforms like Figma and Gumroad empower creators with direct-to-audience tools, fostering a design ethos that is raw, functional, and unapologetic. Their bold typography and high-contrast UIs are hallmarks of modern neo-brutalism.',
	},
];

export default function TimelineScroller() {
	return (
		<div className={timelineStyles.timeline_container}>
			<div className={timelineStyles.timeline_wrapper}>
				{timelineItems.map((item, index) => (
					<div
						key={index}
						className={`${timelineStyles.timeline_item} ${
							index % 2 === 0 ? timelineStyles.left : timelineStyles.right
						}`}
					>
						<div className={timelineStyles.timeline_dot}></div>
						<div className={timelineStyles.timeline_item_content}>
							<article
								className={cardStyles.neo_brutalist_card}
								style={{
									backgroundColor: 'var(--paper-white)',
									color: 'var(--foundation-black)',
								}}
							>
								<time
									style={{
										fontFamily: 'var(--mono-font)',
										fontSize: '0.9rem',
									}}
								>
									{item.date}
								</time>
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}