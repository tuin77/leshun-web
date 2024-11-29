<script setup lang="ts">
const navLinks = ref([
	{
		label: "首页",
		isLink: true
	},
	{
		label: "人脸识别",
		id: "product",
		children: [
			{
				label: "消费机",
				description: "You have nothing to do, @nuxt/icon will handle it automatically."
			},
			{
				label: "团餐机",
				description: "Choose a primary and a neutral color from your Tailwind CSS theme."
			},
			{
				label: "微信家校视频通话机",
				description: "You can customize components by using the ."
			},
			{
				label: "门禁机",
				description: "Choose a primary and a neutral color from your Tailwind CSS theme."
			}
		]
	},
	{
		label: "智能硬件",
		url: "https://www.shengwang.cn/usecase/",
		id: "hardware",
		children: [
			{
				label: "工业级数据传输",
				desc: "LS-D3000",
				img: "https://hzleshun.com/static/img/dtu-3000.b9d4fdb.png"
			},
			{
				label: "工业级数据传输",
				desc: "LSD3300X",
				img: "https://hzleshun.com/static/img/rtucat.d4e4f7e.png"
			},
			{
				label: "边缘计算网关",
				desc: "LS-智盒",
				img: "https://hzleshun.com/static/img/ls-4000.fa92029.png"
			},
			{
				label: "工业级数据传输",
				desc: "LSD3300X",
				img: "https://hzleshun.com/static/img/rtucat.d4e4f7e.png"
			},
			{
				label: "移动定位终端",
				desc: "NB-iot",
				img: "https://hzleshun.com/static/img/nb.f35b60a.png"
			}
		]
	},
	{
		label: "网卡平台",
		isLink: true
	},
	{
		label: "软件服务",
		position: "relative",
		children: [{ label: "设备管理服务" }, { label: "校园后勤综合管理平台" }]
	},
	{
		label: "关于乐舜",
		id: "about",
		position: "relative",
		children: [{ label: "乐舜简介" }, { label: "合作伙伴" }, { label: "联系我们" }]
	}
]);
</script>
<template>
	<header class="bg-white relative header">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5">
					<span class="sr-only">乐舜信科</span>
					<img class="h-10 w-auto" src="/logos/logo.svg" alt="" />
				</a>
			</div>
			<div class="flex lg:hidden py-5">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="size-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<div class="hidden lg:flex lg:gap-x-12">
				<template v-for="item in navLinks" :key="item.id">
					<div
						v-if="!item.isLink"
						class="group/item py-5.5"
						:class="[item.position && item.position]"
					>
						<button
							type="button"
							class="flex items-center gap-x-1 text-sm text-[#242F3D] group-hover/item:text-[#099DFD]"
							aria-expanded="false"
						>
							{{ item.label }}
							<svg
								class="size-4 flex-none text-gray-400 !group-hover/item:text-[#099DFD] !group-hover/item:animate-move"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path
									fill-rule="evenodd"
									d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>

						<div
							v-if="item.id === 'product'"
							class="invisible absolute left-0 top-full z-10 w-screen overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5 opacity-0 translate-y-1 transition ease-out duration-200 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:translate-y-0 transition ease-in duration-150"
						>
							<div class="p-4 max-w-7xl mx-auto">
								<div
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
								>
									<div class="flex-auto">
										<!-- group-hover:bg-white -->
										<a href="#" class="block font-semibold text-gray-900">
											LSF系列
											<span class="absolute inset-0"></span>
										</a>
										<p class="mt-1 text-gray-600">
											Get a better understanding of your traffic
										</p>
									</div>
								</div>
								<div
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
								>
									<div class="flex-auto">
										<a href="#" class="block font-semibold text-gray-900">
											Engagement
											<span class="absolute inset-0"></span>
										</a>
										<p class="mt-1 text-gray-600">Speak directly to your customers</p>
									</div>
								</div>
								<div
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
								>
									<div class="flex-auto">
										<a href="#" class="block font-semibold text-gray-900">
											Security
											<span class="absolute inset-0"></span>
										</a>
										<p class="mt-1 text-gray-600">
											Your customers’ data will be safe and secure
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							v-else-if="item.id === 'hardware'"
							class="invisible absolute left-0 top-full z-10 w-screen overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5 opacity-0 translate-y-1 transition ease-out duration-200 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:translate-y-0 transition ease-in duration-150"
						>
							<div class="p-4 max-w-7xl mx-auto">
								<h2 class="sr-only">Products</h2>

								<div
									class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8"
								>
									<a
										v-for="link in item.children"
										:key="link.label"
										href="#"
										class="group"
									>
										<img
											:src="link.img"
											alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
											class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
										/>
										<h3 class="mt-4 text-sm text-gray-700">{{ link.desc }}</h3>
										<p class="mt-1 text-lg font-medium text-gray-900">{{ link.label }}</p>
									</a>
									<!-- <a href="#" class="group">
										<img
											src="https://hzleshun.com/static/img/rtucat.d4e4f7e.png"
											alt="Olive drab green insulated bottle with flared screw lid and flat top."
											class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
										/>
										<h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
										<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
									</a>
									<a href="#" class="group">
										<img
											src="https://hzleshun.com/static/img/ls-4000.fa92029.png"
											alt="Person using a pen to cross a task off a productivity paper card."
											class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
										/>
										<h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
										<p class="mt-1 text-lg font-medium text-gray-900">$89</p>
									</a>
									<a href="#" class="group">
										<img
											src="https://hzleshun.com/static/img/rtu.be11bc0.png"
											alt="Hand holding black machined steel mechanical pencil with brass tip and top."
											class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
										/>
										<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
										<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
									</a>
									<a href="#" class="group">
										<img
											src="https://hzleshun.com/static/img/nb.f35b60a.png"
											alt="Hand holding black machined steel mechanical pencil with brass tip and top."
											class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
										/>
										<h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
										<p class="mt-1 text-lg font-medium text-gray-900">$35</p>
									</a> -->

									<!-- More products... -->
								</div>
							</div>
						</div>
						<div
							v-else-if="item.children"
							class="invisible absolute -left-4 top-full z-10 p-4 overflow-hidden rounded bg-white shadow-lg ring-1 ring-gray-900/5 opacity-0 translate-y-1 transition ease-out duration-200 group-hover/item:visible group-hover/item:opacity-100 group-hover/item:translate-y-0 transition ease-in duration-150"
						>
							<div
								v-for="link in item.children"
								:key="link.label"
								class="rounded-lg p-2 text-sm/6 hover:bg-gray-50 whitespace-nowrap"
							>
								<a href="#" class="block font-semibold text-gray-900">
									{{ link.label }}
								</a>
							</div>
						</div>
					</div>
					<a v-else href="#" class="text-sm text-[#242F3D] py-5.5">
						{{ item.label }}
					</a>
				</template>
			</div>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
		</nav>
		<!-- Mobile menu, show/hide based on menu open state. -->
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10"></div>
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</a>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
						<span class="sr-only">Close menu</span>
						<svg
							class="size-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<div class="-mx-3">
								<button
									type="button"
									class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									aria-controls="disclosure-1"
									aria-expanded="false"
								>
									Product
									<!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                -->
									<svg
										class="size-5 flex-none"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
										data-slot="icon"
									>
										<path
											fill-rule="evenodd"
											d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
								<!-- 'Product' sub-menu, show/hide based on menu state. -->
								<div id="disclosure-1" class="mt-2 space-y-2">
									<a
										href="#"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Analytics</a
									>
									<a
										href="#"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Engagement</a
									>
									<a
										href="#"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Security</a
									>
									<a
										href="#"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Integrations</a
									>
									<a
										href="#"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Automations</a
									>
									<a
										href="#"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Watch demo</a
									>
									<a
										href="#"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
										>Contact sales</a
									>
								</div>
							</div>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Features</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Marketplace</a
							>
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Company</a
							>
						</div>
						<div class="py-6">
							<a
								href="#"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>Log in</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<style scoped>
.header {
	z-index: 6666;
	box-shadow: 0px 4px 16px 0px rgba(31, 35, 37, 0.11);
}
</style>
