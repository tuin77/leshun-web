<script setup lang="ts">
import Header from "~/modules/layout/Header.vue";
import Header1 from "~/modules/layout/Header1.vue";
import Footer from "~/modules/layout/Footer.vue";
import Main from "~/modules/layout/Main.vue";
import { useScrollRestoration } from "~/modules/a11y/useScrollRestoration";

useScrollRestoration();
</script>

<template>
	<PageMetadata>
		<Header1></Header1>
		<Main>
			<slot />
		</Main>
		<Footer />
	</PageMetadata>
</template>
