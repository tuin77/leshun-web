<script setup lang="ts">
const publicPath = new URL(import.meta.url);
console.log("publicPath", publicPath.origin);
const imagesURL = `${publicPath.origin}/images/hardware-`;

const groups = ref([
	{
		label: "乐舜智能硬件",
		name: "乐舜智能硬件",
		children: [
			{
				img: `${imagesURL}LSD3000.png`,
				name: "LS-D3000",
				label: "工业级数据传输"
			},
			{
				img: `${imagesURL}LSD3110X.png`,
				name: "LSD3110X",
				label: "工业级数据传输"
			},
			{
				img: `${imagesURL}LSD3300X.png`,
				name: "LSD3300X",
				label: "工业级数据传输"
			},
			{
				img: `${imagesURL}LSZhihe.png`,
				name: "LS-智盒",
				label: "边缘计算网关"
			},
			{
				img: `${imagesURL}nb.png`,
				name: "NB-iot",
				label: "移动定位终端"
			}
		]
	}
]);
</script>
<template>
	<div class="bg-gray-100">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-none lg:py-12">
				<h2 class="text-2xl font-bold text-gray-900">乐舜智能硬件</h2>
				<p class="mt-4 text-gray-500">
					乐舜信科提供多功能工业无线数据采集终端设备，与无线数据采集网关和组态监控软件，组建一套完整的无线数据采集与监控系统，无线数据采集终端负责采集现场各个节点的温度、气体、压力、电流、电量、温湿度等数据，无需布线，减少运维成本，安装便捷，即插即用。
				</p>
			</div>
		</div>
	</div>

	<div class="bg-white">
		<div
			v-for="group in groups"
			:key="group.name"
			class="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8"
		>
			<h2 class="sr-only">Products</h2>
			<!-- <h2 class="text-2xl font-bold text-gray-900">{{ group.label }}</h2> -->

			<div
				class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
			>
				<a v-for="product in group.children" :key="product.name" href="#" class="group">
					<img
						:src="product.img"
						alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
						class="aspect-square p-2 w-full rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-[7/8]"
					/>
					<h3 class="mt-4 text-sm text-[#f47030]">{{ product.label }}</h3>
					<p class="mt-1 text-lg font-medium text-gray-900">{{ product.name }}</p>
				</a>

				<!-- More products... -->
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
