<script setup lang="ts">
// import Header from "~/modules/layout/Header.vue";
import Header from "~/modules/layout/Header.vue";
import Footer from "~/modules/layout/Footer.vue";
import Main from "~/modules/layout/Main.vue";
import { useScrollRestoration } from "~/modules/a11y/useScrollRestoration";

useScrollRestoration();
</script>

<template>
	<PageMetadata>
		<Header />
		<Main>
			<slot />
		</Main>
		<Footer />
	</PageMetadata>
</template>
