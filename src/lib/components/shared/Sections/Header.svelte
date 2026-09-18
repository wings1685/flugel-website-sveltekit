<script lang="ts">
	import { page } from "$app/state";
	import { useStore } from "$lib/_global/piquo";
	import { Glass } from "./";
	import "./Header.sass";

	const { navOpened, setNavOpened } = useStore('navOpened');

	const handleClick = (e?: Event) => {
		if (e) {
			e.preventDefault();
			setNavOpened(!navOpened());
		} else {
			setNavOpened(false);
		}
	};
	const thisPage = $derived(page.url.pathname.replace(/\//g, '') || 'top');
</script>
<header>
	<input type="checkbox" checked={ navOpened() } />
	<Glass as="a" mini isDark href="/" icon="home" onclick={ () => handleClick() } class={ { active: thisPage === 'top' } }>
		<p>
			<span>Home</span>
		</p>
	</Glass>
	<Glass as="a" mini isDark href="/archives/" icon="folder" onclick={ () => handleClick() } class={ { active: thisPage === 'archives' } }>
		<p>
			<span>Archives</span>
		</p>
	</Glass>
	<Glass as="a" mini isDark href="/types/" icon="code" onclick={ () => handleClick() } class={ { active: thisPage === 'types' } }>
		<p>
			<span>Types</span>
		</p>
	</Glass>
	<Glass as="div" mini isDark id="btn_nav" onclick={ handleClick }>
		<span></span>
	</Glass>
</header>
