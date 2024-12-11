<script setup lang="ts">
const publicPath = new URL(import.meta.url);
console.log("publicPath", publicPath.origin);
const imagesURL = `${publicPath.origin}/images/product-`;

const groups = ref([
	{
		label: "LSF系列消费机",
		children: [
			{ img: `${imagesURL}LSF860.png`, name: "LSF860" },
			{ img: `${imagesURL}LSF860QR.png`, name: "LSF860QR" },
			{ img: `${imagesURL}LSF910.png`, name: "LSF910(微信)" },
			{ img: `${imagesURL}LSF860QR.png`, name: "LSF910QR(微信)" },
			{ img: `${imagesURL}LSF910alipay.png`, name: "LSF910(支付宝)" },
			{ img: `${imagesURL}LSF860QR.png`, name: "LSF910QR(支付宝)" },
			{ img: `${imagesURL}LSF920.png`, name: "LSF920" },
			{ img: `${imagesURL}LSF860QR.png`, name: "LSF950" },
			{ img: `${imagesURL}LSF950.png`, name: "LSF950" },
			{ img: `${imagesURL}LSF951.png`, name: "LSF951" }
		]
	},
	{
		label: "LSG系列门禁机",
		children: [
			{
				img: `${imagesURL}LSG680.png`,
				name: "LSG680",
				label: ""
			},
			{
				img: `${imagesURL}LSG681.png`,
				name: "LSG681",
				label: ""
			}
		]
	},
	{
		label: "LSV系列视频通话机",
		children: [
			{ img: `${imagesURL}LSV1000.png`, name: "LSV1000" },
			{ img: `${imagesURL}LSV2000.png`, name: "LSV2000&3000" }
		]
	},
	{
		label: "LSC系列电子班牌",
		children: [{ img: `${imagesURL}LSC1100.png`, name: "LSC1100" }]
	}
]);
</script>
<template>
	<div class="bg-gray-100">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-12">
				<h2 class="text-2xl font-bold text-gray-900">人脸识别设备</h2>
				<p class="mt-4 text-gray-500">
					乐舜信科提供为服务商提供一站式的软硬件开发及服务。人脸识别系列产品落地到校园的“餐饮”，“零售”，“门禁”，“通话”等场景，实现校园的一脸通行。
				</p>
			</div>
		</div>
	</div>

	<div class="bg-white">
		<div
			v-for="group in groups"
			:key="group.label"
			class="mx-auto max-w-2xl px-4 pt-14 pb-4 sm:px-6 lg:max-w-7xl lg:px-8"
		>
			<h2 class="sr-only">Products</h2>
			<h2 class="text-2xl font-bold text-[#f47030]">{{ group.label }}</h2>

			<div
				class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
			>
				<a v-for="product in group.children" :key="product.name" href="#" class="group">
					<img
						:src="product.img"
						alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
						class="aspect-square w-full p-4 rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-[7/8]"
					/>
					<h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
					<!-- <p class="mt-1 text-lg font-medium text-gray-900">{{ product.name }}</p> -->
				</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
