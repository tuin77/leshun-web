<script setup lang="ts">
import Header from "~/modules/layout/Header.vue";
import Header1 from "~/modules/layout/Header1.vue";
import Footer from "~/modules/layout/Footer.vue";
import Main from "~/modules/layout/Main.vue";
import HeaderNavbar from "../modules/navigation/HeaderNavbar.vue";
import MobileNavigation from "../modules/navigation/MobileNavigation.vue";
import { useScrollRestoration } from "~/modules/a11y/useScrollRestoration";
import SkipNavigationLink from "../modules/a11y/SkipNavigationLink.vue";
import PageMetadata from "../modules/seo/PageMetadata.vue";

useScrollRestoration();
</script>

<template>
	<PageMetadata>
		<SkipNavigationLink />
		<!-- <Header></Header> -->
		<Header1></Header1>
		<MobileNavigation />
		<HeaderNavbar />
		<Main>
			<slot />
		</Main>
		<Footer />
	</PageMetadata>
</template>
