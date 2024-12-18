<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: "/school-family-video-chat",
		fr: "/demarrage"
	}
});

const useCases = [
	{
		img: "/images/lsv1000/use-case1.png",
		name: "校园电话亭"
	},
	{
		img: "/images/lsv1000/use-case2.png",
		name: "学生宿舍"
	},
	{
		img: "/images/lsv1000/use-case3.png",
		name: "班级走廊"
	},
	{
		img: "/images/lsv1000/use-case4.png",
		name: "公共区域"
	}
];
const advantages = [
	{
		name: "设备识别速度快",
		describe: "刷脸离线识别仅需300毫秒，大大提高工作效率",
		img: "/images/product/advantage1.png"
	},
	{
		name: "安全性强、扩展性好",
		describe: "双缓存保障，数据准确，设备自动备份，界面可自定义配置",
		img: "/images/product/advantage2.png"
	},
	{
		name: "亲情号通讯录",
		describe: " 可添加多个亲情号 通讯录均可设置",
		img: "/images/product/advantage3.png"
	},
	{
		name: "高清语音视频通话",
		describe: "高清3D结构光摄像头，画面清晰有质感，声音清楚，使用流畅",
		img: "/images/product/advantage4.png"
	},
	{
		name: "高稳定性",
		describe: "网络流畅不卡顿，保持稳定，稳定性极高",
		img: "/images/product/advantage5.png"
	}
];
const specsParams = [
	{
		name: "操作系统",
		describe: "Android 7.1",
		describe2: "",
		img: "/images/lsv1000/specs-param1.png"
	},
	{
		name: "横显示屏",
		describe: 'LSVMax 1000:13.3"',
		describe2: "分辨率1920x1080",
		img: "/images/lsv1000/specs-param2.png"
	},
	{
		name: "竖显示屏",
		describe: 'LSV 1000:10.1"',
		describe2: "分辨率800x1280",
		img: "/images/lsv1000/specs-param3.png"
	},
	{
		name: "处理器",
		describe: "高通骁龙",
		describe2: "八核处理器",
		img: "/images/lsv1000/specs-param4.png"
	},
	{
		name: "NFC",
		describe: "13.56HMZ",
		describe2: "",
		img: "/images/lsv1000/specs-param5.png"
	},
	{
		name: "存储器",
		describe: "2GB+16GB",
		describe2: "",
		img: "/images/lsv1000/specs-param6.png"
	},
	{
		name: "WIFI",
		describe: "2.4G/5G 支持IEEE",
		describe2: "802.11 a/b/g/n/ac",
		img: "/images/lsv1000/specs-param7.png"
	},
	{
		name: "触摸屏",
		describe: "G+G电容多点触摸屏",
		describe2: "",
		img: "/images/lsv1000/specs-param8.png"
	},
	{
		name: "外部接口",
		describe: "以太网接口",
		describe2: "USB接口/SIM卡",
		img: "/images/lsv1000/specs-param9.png"
	},
	{
		name: "电源适配器",
		describe: "Input: AC100-24V",
		describe2: "Output: DC12V/3A",
		img: "/images/lsv1000/specs-param10.png"
	}
];
</script>

<template>
	<div class="page flex-col">
		<div class="w-full">
			<img
				src="/images/product/LSV1000-main-bg.png"
				alt=""
				class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
			/>

			<div class="mx-auto max-w-screen-2xl pt-49 pb-30 md:px-8">
				<div class="relative isolate overflow-hidden pt-16 flex">
					<div class="text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
						<h2 class="text-balance text-6xl font-semibold tracking-tight text-white">
							LSV1000视频通话机
						</h2>
						<p class="mt-6 text-pretty text-2xl text-gray-100">
							LSV1000视频通话机是一款家校视讯终端，整机一体纯平设计，外观美观，超薄，可触摸操作，拥有高清画面；液晶面板使用莫氏7级钢化玻璃，大大提高了产品安全性。相较于普通电子班牌，增加了视频通话功能，更便于学生与家长沟通。
							<a href="#" class="text-sm/6 font-semibold text-white">
								更多 <span aria-hidden="true">→</span>
							</a>
						</p>
					</div>
					<img
						class="w-[48rem] max-w-none"
						src="/images/product/LSV1000-main.png"
						alt="App screenshot"
						width="921"
						height="623"
					/>
				</div>
			</div>
		</div>

		<div class="bg-white pt-22 pb-36 sm:py-32">
			<div class="mx-auto max-w-7xl">
				<h2 class="text-center text-6xl font-semibold text-#333">产品优势</h2>
				<div class="mx-auto mt-26 flex max-w-6xl justify-around">
					<div
						v-for="item in advantages"
						:key="item.name"
						class="max-w-198px w-full object-contain flex flex-col items-center justify-start"
					>
						<img
							class="col-span-2 w-24 h-24 w-full object-contain"
							:src="item.img"
							alt="Transistor"
						/>
						<p class="text-[21px] text-#333 mt-10 font-medium">{{ item.name }}</p>
						<p class="text-xl text-#666 text-center mt-6">{{ item.describe }}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="section_2 flex-col">
			<div class="box_8 flex-col">
				<div class="text-group_2 flex-col justify-between">
					<span class="text_14">高清3D结构光摄像头</span>
					<span class="text_15">识别速度快/准确率高/3D结构光摄像头</span>
				</div>
				<div class="block_1 flex-row justify-between">
					<div class="text-group_3 flex-col justify-between">
						<span class="text_16">IR&nbsp;泛光灯</span>
						<span class="text_17">投射红外光</span>
					</div>
					<div class="text-group_4 flex-col justify-between">
						<span class="text_18">距离感应模组</span>
						<span class="text_19">感知目标物距离信息</span>
					</div>
				</div>
				<span class="text_20">色彩摄像头模组</span>
				<div class="block_2 flex-row">
					<div class="text-wrapper_2 flex-col justify-between">
						<span class="text_21">红外发射模组</span>
						<span class="text_22">投射红外光斑</span>
					</div>
					<img
						class="image_9"
						referrerpolicy="no-referrer"
						src="https://lanhu-oss.lanhuapp.com/SketchPngbfc8ae69e0fe41c2b437a3968ada4e0265cbc9701081c97caec6f473b9d78e6b"
					/>
					<div class="group_1 flex-col justify-between">
						<span class="text_23">拍摄目标物彩色图像</span>
						<img
							class="image_10"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng5ab2f3b8105cb2c2fc3587cce5c355a355ac0ebd6122f7f118447cd5c197ee67"
						/>
					</div>
					<div class="text-group_5 flex-col justify-between">
						<span class="text_24">红外接收模组</span>
						<span class="text_25">接收红外光信息</span>
					</div>
				</div>
				<div class="block_3 flex-col">
					<div class="text-wrapper_3 flex-col">
						<span class="text_26">⾼通骁⻰⼋核处理器</span>
					</div>
				</div>
				<img
					class="image_11"
					referrerpolicy="no-referrer"
					src="https://lanhu-oss.lanhuapp.com/SketchPng54fee55f81fc1a569c3d9a8d561d1ed7229536322ce332ac8e977b7b7ac67f6f"
				/>
				<div class="image-wrapper_2 flex-col">
					<img
						class="image_12"
						referrerpolicy="no-referrer"
						src="https://lanhu-oss.lanhuapp.com/SketchPng9bd80930ef79814a7c9577530b7cff485164915df62810eb3c4968f72426e465"
					/>
				</div>
			</div>
			<div class="text-wrapper_4 flex-col">
				<span class="text_27"
					>选⽤业内领先的⾼通芯⽚⽅案，历经上千项严格的研发测试，在稳定性上得到充分的提升；采⽤先进的半导体制程提⾼性能，完善的功率管理系统降低功耗。</span
				>
			</div>
		</div> -->
		<!-- <div class="section_3 flex-col">
			<span class="text_28">满足多种环境&nbsp;&nbsp;高效灵活服务</span>
			<img
				class="image_13"
				referrerpolicy="no-referrer"
				src="https://lanhu-oss.lanhuapp.com/SketchPngf3a5b7df5d8b51f3544bdfc5bf984b5d893763cddc2b00f1f9138f7abf0910e3"
			/>
			<div class="box_9 flex-row justify-between">
				<div class="group_2 flex-col justify-between">
					<img
						class="image_14"
						referrerpolicy="no-referrer"
						src="https://lanhu-oss.lanhuapp.com/SketchPng023379cbdccbbd6e356b3e327842f061d9e8137965e4363fdd4e8d846d02bad5"
					/>
					<span class="text_29">视频通话</span>
				</div>
				<div class="group_3 flex-col justify-between">
					<img
						class="image_15"
						referrerpolicy="no-referrer"
						src="https://lanhu-oss.lanhuapp.com/SketchPng0105193d4ffba2250483f0ce05029d36dfd1006f8333abe85ebb2de6e4fd0805"
					/>
					<span class="text_30">语音通话</span>
				</div>
				<div class="group_4 flex-col justify-between">
					<div class="image-wrapper_3 flex-col">
						<img
							class="image_16"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPngb4794308a0bb0dffbfb471b157837a62d9262232fbd4a22dbc4469de5bb23ba3"
						/>
					</div>
					<span class="text_31">刷脸识别</span>
				</div>
				<div class="group_5 flex-col justify-between">
					<img
						class="image_17"
						referrerpolicy="no-referrer"
						src="https://lanhu-oss.lanhuapp.com/SketchPng1d2e43e1139f6ffe0a894fb8347ebc1023f784f783634559f8519427712fba05"
					/>
					<span class="text_32">刷卡识别</span>
				</div>
			</div>
			<span class="text_33">刷脸秒级识别拨打亲情通话</span>
			<div class="image-wrapper_4 flex-col">
				<img
					class="image_18"
					referrerpolicy="no-referrer"
					src="https://lanhu-oss.lanhuapp.com/SketchPng6de11934ef86655830d4585118666635881a3a8cf4d45f81c7c9f1406bdb7562"
				/>
			</div>
		</div> -->
		<div class="section_4 flex-col relative">
			<img
				src="/images/lsv1000/diversify-bg.png"
				class="absolute inset-0 -z-10 size-full object-cover object-right"
			/>
			<h2 class="text-center">信息多样化&nbsp;使用便捷</h2>
			<p class="text-center text-white">多种信息架构，适合多种使用要求，简单大方便捷</p>
			<img class="w-1053px h-666px mx-auto" src="/images/lsv1000/diversify-main1.png" />

			<div class="flex max-w-4xl mx-auto">
				<div class="flex-col justify-between items-center">
					<img class="w-170px h-170px" src="/images/lsv1000/diversify-icon1.png" />
					<span class="text-[26px] text-white mt-5 mb-7">信息发布</span>
				</div>
				<div class="flex-col justify-between items-center">
					<img class="w-170px h-170px" src="/images/lsv1000/diversify-icon2.png" />
					<span class="text-[26px] text-white mt-5 mb-7">校园风采</span>
				</div>
				<div class="flex-col justify-between items-center">
					<img class="w-170px h-170px" src="/images/lsv1000/diversify-icon3.png" />
					<span class="text-[26px] text-white mt-5 mb-7">网络留言</span>
				</div>
				<div class="flex-col justify-between items-center">
					<img class="w-170px h-170px" src="/images/lsv1000/diversify-icon4.png" />
					<span class="text-[26px] text-white mt-5 mb-7">拓展第三方接口</span>
				</div>
			</div>
			<h3 class="text-4xl">支持自由换肤&nbsp;&nbsp;自定义通话原则</h3>
			<img class="w-824px h-744px mx-auto" src="/images/lsv1000/diversify-main2.png" />

			<!-- <div class="text-wrapper_5 flex-row">
				<span class="text_36">信息发布</span>
				<span class="text_37">校园风采</span>
				<span class="text_38">网络留言</span>
				<span class="text_39">拓展第三方接口</span>
			</div> -->
		</div>

		<div class="bg-#212121 py-24">
			<div class="mx-auto max-w-6xl px-6 lg:px-8">
				<h2 class="text-center">消息通知强提醒</h2>
				<div class="mx-auto flex">
					<div class="flex flex-col w-170px mr-170px">
						<div class="flex-col justify-between items-center">
							<img class="w-170px h-170px" src="/images/lsv1000/msg-notice1.png" />
							<span class="text-[26px] text-white mt-5 mb-7">响铃</span>
						</div>
						<div class="flex-col justify-between items-center">
							<img class="w-170px h-170px" src="/images/lsv1000/msg-notice2.png" />
							<span class="text-group_8">震动</span>
							<span class="text-[26px] text-white mt-5 mb-7">震动</span>
						</div>
						<div class="flex-col justify-between items-center">
							<img class="w-170px h-170px" src="/images/lsv1000/msg-notice3.png" />
							<span class="text-[26px] text-white mt-5 mb-7">弹窗</span>
						</div>
					</div>
					<img
						src="/images/lsv1000/msg-notice-main.png"
						alt="Product screenshot"
						class="flex-1 rounded-xl shadow-xl w-775px h-739px"
					/>
				</div>
			</div>
		</div>

		<!-- <div class="section_9 flex-col">
			<div class="text-group_15 flex-col justify-between">
				<span class="text_56">兼具品质与美感&nbsp;&nbsp;有颜又抗打</span>
				<span class="text_57">采用莫氏7级钢化玻璃，兼具美观和安全</span>
			</div>
			<div class="group_8 flex-row justify-between">
				<div class="image-wrapper_7 flex-col">
					<img
						class="image_33"
						referrerpolicy="no-referrer"
						src="https://lanhu-oss.lanhuapp.com/SketchPng6ae05149dcb464e44b66a9a2d2ce60e08f2f67102dcd9cefb5262678a36c6d9d"
					/>
				</div>
				<div class="group_9 flex-col"></div>
			</div>
			<img
				class="image_34"
				referrerpolicy="no-referrer"
				src="https://lanhu-oss.lanhuapp.com/SketchPng4f63b65234e578396c84c0da9d0cb97f134e35af798dae30a3fe3c92054f0596"
			/>
			<img
				class="image_35"
				referrerpolicy="no-referrer"
				src="https://lanhu-oss.lanhuapp.com/SketchPng0dee94d50df629243071e08a818a8a24d86b6c0c1449211d204ab6473cb2dde5"
			/>
		</div> -->

		<div class="">
			<h2 class="text-#333 text-center">规格参数</h2>

			<ul role="list" class="p-6 divide-slate-200 grid grid-cols-4 max-w-5xl mx-auto">
				<li v-for="(item, index) in specsParams" :key="index" class="flex py-4">
					<img class="h-10 w-10 rounded-full" :src="item.img" alt="" />
					<div class="ml-3 overflow-hidden">
						<p class="text-sm font-medium text-slate-900">{{ item.name }}</p>
						<p class="text-sm text-slate-500 truncate">
							{{ item.describe }}
							<span v-if="item.describe2" class="block">{{ item.describe2 }}</span>
						</p>
					</div>
				</li>
			</ul>
		</div>

		<div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
			<h2 class="text-#333 text-center">应用场景</h2>

			<div class="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
				<div v-for="(item, index) in useCases" :key="index" href="#" class="group">
					<img
						:src="item.img"
						alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
						class="w-563px h-352px aspect-square rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
					/>
					<h3 class="mt-4 text-center text-3xl text-gray-700">{{ item.name }}</h3>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.section_2 {
	position: relative;

	.box_8 {
		background-color: rgba(73, 73, 73, 1);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 825px;
		.text-group_2 {
			width: 560px;
			height: 147px;
			margin: 88px 0 0 680px;
			.text_14 {
				width: 560px;
				height: 89px;
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 60px;
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				text-align: left;
				white-space: nowrap;
				line-height: 89px;
			}
			.text_15 {
				width: 520px;
				height: 42px;
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 30px;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 42px;
				margin: 16px 0 0 20px;
			}
		}
		.block_1 {
			width: 798px;
			height: 79px;
			margin: 64px 0 0 594px;
			.text-group_3 {
				width: 128px;
				height: 74px;
				.text_16 {
					width: 128px;
					height: 42px;
					overflow-wrap: break-word;
					color: rgba(247, 147, 8, 1);
					font-size: 30px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 42px;
				}
				.text_17 {
					width: 100px;
					height: 28px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 20px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 28px;
					margin-top: 4px;
				}
			}
			.text-group_4 {
				width: 180px;
				height: 74px;
				margin-top: 5px;
				.text_18 {
					width: 180px;
					height: 42px;
					overflow-wrap: break-word;
					color: rgba(247, 147, 8, 1);
					font-size: 30px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 42px;
				}
				.text_19 {
					width: 180px;
					height: 28px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 20px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 28px;
					margin-top: 4px;
				}
			}
		}
		.text_20 {
			width: 210px;
			height: 42px;
			overflow-wrap: break-word;
			color: rgba(247, 147, 8, 1);
			font-size: 30px;
			font-weight: normal;
			text-align: left;
			white-space: nowrap;
			line-height: 42px;
			margin: 8px 0 0 978px;
		}
		.block_2 {
			width: 798px;
			height: 176px;
			margin: 4px 0 217px 594px;
			.text-wrapper_2 {
				width: 180px;
				height: 74px;
				margin-top: 14px;
				.text_21 {
					width: 180px;
					height: 42px;
					overflow-wrap: break-word;
					color: rgba(247, 147, 8, 1);
					font-size: 30px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 42px;
				}
				.text_22 {
					width: 120px;
					height: 28px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 20px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 28px;
					margin-top: 4px;
				}
			}
			.image_9 {
				width: 110px;
				height: 129px;
				margin: 47px 0 0 6px;
			}
			.group_1 {
				width: 229px;
				height: 176px;
				margin-left: 88px;
				.text_23 {
					width: 180px;
					height: 28px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 20px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 28px;
				}
				.image_10 {
					width: 127px;
					height: 129px;
					margin: 19px 0 0 102px;
				}
			}
			.text-group_5 {
				width: 180px;
				height: 74px;
				margin: 14px 0 0 5px;
				.text_24 {
					width: 180px;
					height: 42px;
					overflow-wrap: break-word;
					color: rgba(247, 147, 8, 1);
					font-size: 30px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 42px;
				}
				.text_25 {
					width: 140px;
					height: 28px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 20px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 28px;
					margin-top: 4px;
				}
			}
		}
		.block_3 {
			height: 1441px;
			background: url(https://lanhu-oss.lanhuapp.com/SketchPng8c853368d55899555cb397b81efd604ffb870bf56369928ef310d3c7f5ca72e9)
				0px 0px no-repeat;
			background-size: 925px 1441px;
			width: 924px;
			position: absolute;
			left: 414px;
			top: 530px;
			.text-wrapper_3 {
				height: 353px;
				background: url(https://lanhu-oss.lanhuapp.com/SketchPnga1f5690957ccc06ddd35b40470b635fa3b0637ac3a8f70b31984c796df9c7c39)
					100% no-repeat;
				background-size: 100% 100%;
				width: 1920px;
				margin: 295px 0 0 -414px;
				.text_26 {
					width: 540px;
					height: 89px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 60px;
					font-family: PingFangSC-Semibold;
					font-weight: 600;
					text-align: left;
					white-space: nowrap;
					line-height: 89px;
					margin: 88px 0 0 690px;
				}
			}
		}
		.image_11 {
			position: absolute;
			left: 745px;
			top: 336px;
			width: 193px;
			height: 284px;
		}
		.image-wrapper_2 {
			height: 258px;
			background: url(https://lanhu-oss.lanhuapp.com/SketchPngc16845ff83e409d9c1b790b06ee27aed476fb3e2d1ed6d9d14dd791c7067e70d) -3px -3px
				no-repeat;
			background-size: 254px 261px;
			width: 251px;
			position: absolute;
			left: 947px;
			top: 336px;
			.image_12 {
				width: 1px;
				height: 141px;
				margin: 131px 0 0 69px;
			}
		}
	}
	.text-wrapper_4 {
		height: 834px;
		background: url(https://lanhu-oss.lanhuapp.com/SketchPng54729865a409634ed24e62d51201d8630ad530f0697fb358932631f4380130a9)
			100% no-repeat;
		background-size: 100% 100%;
		width: 1920px;
		position: absolute;
		left: 0;
		top: 1779px;
		.text_27 {
			width: 1280px;
			height: 90px;
			overflow-wrap: break-word;
			color: rgba(255, 255, 255, 1);
			font-size: 30px;
			font-weight: normal;
			text-align: right;
			line-height: 45px;
			margin: -16px 0 0 320px;
		}
	}
}
.section_3 {
	background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/efcf38604dd34cba93d7d0541f3b3fab_mergeImage.png);
	width: 1920px;
	height: 2460px;
	margin-top: 1408px;
	.text_28 {
		width: 760px;
		height: 89px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 60px;
		font-family: PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		white-space: nowrap;
		line-height: 89px;
		margin: 88px 0 0 580px;
	}
	.image_13 {
		width: 958px;
		height: 608px;
		margin: 118px 0 0 476px;
	}
	.box_9 {
		width: 1280px;
		height: 271px;
		margin: 118px 0 0 320px;
		.group_2 {
			width: 189px;
			height: 271px;
			.image_14 {
				width: 189px;
				height: 189px;
			}
			.text_29 {
				width: 120px;
				height: 42px;
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 30px;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 42px;
				margin: 40px 0 0 35px;
			}
		}
		.group_3 {
			width: 189px;
			height: 271px;
			margin-left: 175px;
			.image_15 {
				width: 189px;
				height: 189px;
			}
			.text_30 {
				width: 120px;
				height: 42px;
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 30px;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 42px;
				margin: 40px 0 0 35px;
			}
		}
		.group_4 {
			width: 189px;
			height: 271px;
			margin-left: 174px;
			.image-wrapper_3 {
				height: 189px;
				background: url(https://lanhu-oss.lanhuapp.com/SketchPnga5a3778b0418c8921e97407411a1cc4b023a68af3b09fe7d8220ccda6623f73d)
					100% no-repeat;
				background-size: 100% 100%;
				width: 189px;
				.image_16 {
					width: 60px;
					height: 72px;
					margin: 59px 0 0 64px;
				}
			}
			.text_31 {
				width: 120px;
				height: 42px;
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 30px;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 42px;
				margin: 40px 0 0 35px;
			}
		}
		.group_5 {
			width: 189px;
			height: 271px;
			margin-left: 175px;
			.image_17 {
				width: 189px;
				height: 189px;
			}
			.text_32 {
				width: 120px;
				height: 42px;
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 30px;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 42px;
				margin: 40px 0 0 35px;
			}
		}
	}
	.text_33 {
		width: 576px;
		height: 89px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 48px;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 89px;
		margin: 72px 0 0 684px;
	}
	.image-wrapper_4 {
		height: 848px;
		background: url(https://lanhu-oss.lanhuapp.com/SketchPnge3b7954bca4febcd7f240b73713ba27d5ad37d4b32c5ac1538931b78ce92519c) -1px
			0px no-repeat;
		background-size: 686px 848px;
		width: 685px;
		margin: 56px 0 103px 562px;
		.image_18 {
			width: 390px;
			height: 621px;
			margin: 97px 0 0 254px;
		}
	}
}

.text-group_6 {
	width: 660px;
	height: 147px;
	// margin: 107px 0 0 630px;
	.text_34 {
		width: 560px;
		height: 89px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 60px;
		font-family: PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		white-space: nowrap;
		line-height: 89px;
		margin-left: 50px;
	}
	.text_35 {
		width: 660px;
		height: 42px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 30px;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 42px;
		margin-top: 16px;
	}
}
.block_4 {
	width: 1169px;
	height: 740px;
	margin: 96px 0 0 375px;
	.image-wrapper_5 {
		height: 739px;
		background: url(https://lanhu-oss.lanhuapp.com/SketchPngbf0e60f613ff6cc13cb963877ca592622784a683c3dd1d561498205af741cedd) -1px
			0px no-repeat;
		background-size: 598px 739px;
		margin-top: 1px;
		width: 597px;
	}
	.image_20 {
		width: 450px;
		height: 720px;
	}
}
.block_5 {
	width: 1236px;
	height: 189px;
	margin: 125px 0 0 320px;
	.group_6 {
		width: 916px;
		height: 189px;
		.box_10 {
			background-color: rgba(21, 21, 21, 0.4);
			border-radius: 50%;
			height: 189px;
			width: 189px;
			position: relative;
			.section_5 {
				width: 80px;
				height: 102px;
				background: url(https://lanhu-oss.lanhuapp.com/SketchPng1fe494df800796545934f1541991ac766ece3cc0c9a71303847292613430c36d)
					100% no-repeat;
				background-size: 100% 100%;
				margin: 43px 0 0 48px;
			}
			.image_21 {
				position: absolute;
				left: 44px;
				top: 43px;
				width: 102px;
				height: 103px;
			}
		}
		.box_11 {
			background-color: rgba(21, 21, 21, 0.4);
			border-radius: 50%;
			height: 189px;
			margin-left: 175px;
			width: 189px;
			position: relative;
			.block_6 {
				width: 94px;
				height: 72px;
				background: url(https://lanhu-oss.lanhuapp.com/SketchPng9571ba3aaf43863010efa762a37b4160278776c41d7e56807dc8a9a4eb2fc740)
					100% no-repeat;
				background-size: 100% 100%;
				margin: 53px 0 0 48px;
			}
			.image_22 {
				position: absolute;
				left: 48px;
				top: 53px;
				width: 94px;
				height: 82px;
			}
		}
		.box_12 {
			background-color: rgba(21, 21, 21, 0.4);
			border-radius: 50%;
			height: 189px;
			margin-left: 174px;
			width: 189px;
			position: relative;
			.box_13 {
				width: 90px;
				height: 72px;
				background: url(https://lanhu-oss.lanhuapp.com/SketchPng733d7658c2e11c7c5e53d67d13bfb985b36ba413b6483c8a504d32c8b5e43ff3)
					100% no-repeat;
				background-size: 100% 100%;
				margin: 50px 0 0 48px;
			}
			.image_23 {
				position: absolute;
				left: 46px;
				top: 48px;
				width: 97px;
				height: 94px;
			}
		}
	}
	.image_24 {
		width: 101px;
		height: 97px;
		margin-top: 46px;
	}
}
.text-wrapper_5 {
	width: 1255px;
	height: 42px;
	margin: 40px 0 0 355px;
	.text_36 {
		width: 120px;
		height: 42px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 30px;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 42px;
	}
	.text_37 {
		width: 120px;
		height: 42px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 30px;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 42px;
		margin-left: 244px;
	}
	.text_38 {
		width: 120px;
		height: 42px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 30px;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 42px;
		margin-left: 243px;
	}
	.text_39 {
		width: 210px;
		height: 42px;
		overflow-wrap: break-word;
		color: rgba(255, 255, 255, 1);
		font-size: 30px;
		font-weight: normal;
		text-align: left;
		white-space: nowrap;
		line-height: 42px;
		margin-left: 198px;
	}
}
.text_40 {
	width: 656px;
	height: 89px;
	overflow-wrap: break-word;
	color: rgba(255, 255, 255, 1);
	font-size: 48px;
	font-weight: normal;
	text-align: left;
	white-space: nowrap;
	line-height: 89px;
	margin: 96px 0 0 634px;
}
.image-wrapper_6 {
	height: 827px;
	background: url(https://lanhu-oss.lanhuapp.com/SketchPngd8308ac9adff58e47bdf3b4a35d4001adbc7cab7177077099e670ed886626f7d)
		100% no-repeat;
	background-size: 100% 100%;
	width: 668px;
	margin: 80px 0 213px 502px;
	.image_25 {
		width: 379px;
		height: 608px;
		margin: 92px 0 0 249px;
	}
}
.image_26 {
	position: absolute;
	left: 989px;
	top: 1782px;
	width: 429px;
	height: 686px;
}

.text_55 {
	width: 240px;
	height: 89px;
	overflow-wrap: break-word;
	color: rgba(51, 51, 51, 1);
	font-size: 60px;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	text-align: left;
	white-space: nowrap;
	line-height: 89px;
	margin: 88px 0 0 840px;
}
.grid_2 {
	width: 1280px;
	height: 868px;
	flex-wrap: wrap;
	margin: 80px 0 178px 320px;
	.image-text_5 {
		width: 626px;
		height: 410px;
		margin: 0 28px 48px 0;
		&:nth-child(2n) {
			margin-right: 0;
		}
		&:nth-last-child(-n + 2) {
			margin-bottom: 0;
		}
		.block_7 {
			border-radius: 4px;
			background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c1e955adde6146fe8015ded13b10c946_mergeImage.png);
			width: 626px;
			height: 352px;
		}
		.text-group_14 {
			width: 150px;
			height: 42px;
			overflow-wrap: break-word;
			color: rgba(51, 51, 51, 1);
			font-size: 30px;
			font-weight: normal;
			text-align: left;
			white-space: nowrap;
			line-height: 42px;
			margin: 16px 0 0 238px;
		}
	}
}

.section_9 {
	position: absolute;
	left: 0;
	top: 3485px;
	width: 1920px;
	height: 1440px;
	background: url(https://lanhu-oss.lanhuapp.com/SketchPng6864fc2e6b1560d5028b8b7d55e32431f87faad97e2edc0a84e1ee5dc2d6eb67)
		100% no-repeat;
	background-size: 100% 100%;
	.text-group_15 {
		width: 760px;
		height: 147px;
		margin: 116px 0 0 580px;
		.text_56 {
			width: 760px;
			height: 89px;
			overflow-wrap: break-word;
			color: rgba(255, 255, 255, 1);
			font-size: 60px;
			font-family: PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			white-space: nowrap;
			line-height: 89px;
		}
		.text_57 {
			width: 527px;
			height: 42px;
			overflow-wrap: break-word;
			color: rgba(255, 255, 255, 1);
			font-size: 30px;
			font-weight: normal;
			text-align: left;
			white-space: nowrap;
			line-height: 42px;
			margin: 16px 0 0 117px;
		}
	}
	.group_8 {
		width: 1043px;
		height: 590px;
		margin: 435px 0 152px 350px;
		.image-wrapper_7 {
			height: 590px;
			background: url(https://lanhu-oss.lanhuapp.com/SketchPng9f701cab9d22df120dd0fbb4073a36a6f878bd4f1e8c2a69afac221b722a473d)
				100% no-repeat;
			background-size: 100% 100%;
			width: 452px;
			.image_33 {
				width: 415px;
				height: 575px;
				margin: 1px 0 0 -2px;
			}
		}
		.group_9 {
			width: 360px;
			height: 44px;
			background: url(https://lanhu-oss.lanhuapp.com/SketchPnged47790b370a1561e8654e3a1814b655212e5d4858ed6a3e0c617300c2398c3d) -27px -28px
				no-repeat;
			background-size: 414px 99px;
			margin-top: 536px;
		}
	}
	.image_34 {
		position: absolute;
		left: 776px;
		top: 393px;
		width: 650px;
		height: 401px;
	}
	.image_35 {
		position: absolute;
		left: 876px;
		top: 643px;
		width: 510px;
		height: 631px;
	}
}
</style>
<style lang="scss" scoped>
.flex-col {
	display: flex;
	flex-direction: column;
}
.flex-row {
	display: flex;
	flex-direction: row;
}
.justify-start {
	display: flex;
	justify-content: flex-start;
}
.justify-center {
	display: flex;
	justify-content: center;
}

.justify-end {
	display: flex;
	justify-content: flex-end;
}
.justify-evenly {
	display: flex;
	justify-content: space-evenly;
}
.justify-around {
	display: flex;
	justify-content: space-around;
}
.justify-between {
	display: flex;
	justify-content: space-between;
}
.align-start {
	display: flex;
	align-items: flex-start;
}
.align-center {
	display: flex;
	align-items: center;
}
.align-end {
	display: flex;
	align-items: flex-end;
}
</style>
