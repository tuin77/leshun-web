<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: "/school-family-video-chat",
		fr: "/demarrage"
	}
});

const loopData0 = [
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPng5fbbc9b13671138fa08444b2aa579290917481eb33e3afae2e0f41eb4dd84e97",
		slot1: 1
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPng1334d9ac0b6bc13c024478916db917da862027a0977e7d82baf55bafbe9d295f",
		specialSlot2: {
			lanhutext0: "横显示屏",
			lanhutext1: "LSVMax&nbsp;1000:13.3″",
			lanhutext2: "分辨率1920*1080"
		},
		slot2: 2
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPnge7f2e95cedee8fd550fb072ad8bfae5efd1d540d69c535a008c8ecee0b7d482e",
		specialSlot2: {
			lanhutext0: "竖显示屏",
			lanhutext1: "LSV&nbsp;1000:10.1″",
			lanhutext2: "分辨率800*1280"
		},
		slot2: 2
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPnga728c315102ba082536d6eca4d06a7fa626df5266c77483c818fb812d1ec4747",
		specialSlot4: {
			lanhutext0: "处理器",
			lanhutext1: "高通骁龙八核处理器"
		},
		slot4: 4
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPngc83c4ec170c3c78dc696b6afc8c6bf250c0d9137641df6cb84a39e5333ad4243",
		slot3: 3
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPng0a999b7d9bba1ec9cd81607b487811e4929aaea7c16f044329f28f09be924d03",
		specialSlot4: { lanhutext0: "存储器", lanhutext1: "2GB+16GB" },
		slot4: 4
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPng9c414390944b4c6bfbcd0c425d291b2af727186f2fed7cbfd84863d8c20e176c",
		slot5: 5
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPngc13c1b42d0f38b336e66b289dbbf24775924b163a5edee4d4637f734af5eb322",
		specialSlot4: {
			lanhutext0: "触摸屏",
			lanhutext1: "G+G电容多点触摸屏"
		},
		slot4: 4
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPng151abdb89ef247c096d5bd0475b12d3446afb1028c65324179acb95179032b56",
		specialSlot2: {
			lanhutext0: "外部接口",
			lanhutext1: "以太网接口",
			lanhutext2: "USB接口/SIM卡"
		},
		slot2: 2
	},
	{
		lanhuimage0:
			"https://lanhu-oss.lanhuapp.com/SketchPng0919a6d6da7adc77809c399b0f0579d6d18bbe67dee722844bb85a3bde2f6efe",
		specialSlot2: {
			lanhutext0: "电源适配器",
			lanhutext1: "Input：AC100-24V",
			lanhutext2: "Output：DC12V/3A"
		},
		slot2: 2
	}
];
const loopData1 = [
	{
		lanhuBg1:
			"url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c1e955adde6146fe8015ded13b10c946_mergeImage.png)",
		lanhutext0: "校园电话亭"
	},
	{
		lanhuBg1:
			"url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/919524f2597e4835a16ba396c784791c_mergeImage.png)",
		lanhutext0: "学生宿舍"
	},
	{
		lanhuBg1:
			"url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/0332ba4da65740f3826215ea29f4db43_mergeImage.png)",
		lanhutext0: "班级走廊"
	},
	{
		lanhuBg1:
			"url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/433fcd8b56f54ae79681e7fd860fb2ce_mergeImage.png)",
		lanhutext0: "公共区域"
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
		describe: "可添加多个亲情号，通讯录均可设置",
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
</script>

<template>
	<div class="page flex-col">
		<div class="w-full">
			<img
				src="/images/product/LSV1000-main-bg.png"
				alt=""
				class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
			/>

			<div class="mx-auto max-w-screen-2xl pt-48 pb-30 md:px-8">
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

		<!-- <div class="section_2 flex-col">
			<div class="box_1 flex-col">
				<span class="text_3">产品优势</span>
				<div class="box_2 flex-row">
					<div class="box_3 flex-col justify-between">
						<img
							class="image_4"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng033088b3816a40f626ac5d4f265a3d802e4146cb76e10d5aa488d8d4f5a6e497"
						/>
						<span class="text_4">设备识别速度快</span>
					</div>
					<div class="box_4 flex-col justify-between">
						<div class="image-wrapper_1 flex-col">
							<img
								class="image_5"
								referrerpolicy="no-referrer"
								src="https://lanhu-oss.lanhuapp.com/SketchPngd2f955f8c69cfafb36c0b81a84c0b1a97b4db35e973b35f6f5912217c738c70b"
							/>
						</div>
						<span class="text_5">安全性强、扩展性好</span>
					</div>
					<div class="box_5 flex-col justify-between">
						<img
							class="image_6"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng1196ffbe4735612433d45971749a239df89919555c6512f880b02ea319b60598"
						/>
						<span class="text_6">亲情号通讯录</span>
					</div>
					<div class="box_6 flex-col justify-between">
						<img
							class="image_7"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng30afee4cf6061808b58c7d339bf9aeeba80c990e2d0d06d9625acb10c244e94c"
						/>
						<span class="text_7">高清语音视频通话</span>
					</div>
					<div class="box_7 flex-col justify-between">
						<img
							class="image_8"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPnga3db324ced557dc0c359426d9144f2bc17ad33331cf0a908e45c4eb1e044f8ff"
						/>
						<span class="text_8">高稳定性</span>
					</div>
				</div>
				<div class="text-wrapper_1 flex-row">
					<span class="text_9">刷脸离线识别仅需300毫秒，大大提高工作效率</span>
					<span class="text_10"
						>双缓存保障，数据准确，设备自动备份，界面可自定义配置</span
					>
					<span class="text_11">可添加多个亲情号&nbsp;&nbsp;通讯录均可设置</span>
					<span class="text_12"
						>高清3D结构光摄像头，画面清晰有质感，声音清楚，使用流畅</span
					>
					<span class="text_13">网络流畅不卡顿，保持稳定，稳定性极高</span>
				</div>
			</div>
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
		<div class="bg-white py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 class="text-center text-6xl font-semibold text-gray-900">产品优势</h2>
				<div
					class="mx-auto mt-10 grid max-w-4xl grid-cols-5 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-12 lg:grid-cols-5"
				>
					<div
						v-for="item in advantages"
						:key="item.name"
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex flex-col items-center"
					>
						<img
							class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
							:src="item.img"
							alt="Transistor"
							width="158"
							height="48"
						/>
						<p>{{ item.name }}</p>
						<p>{{ item.describe }}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="section_3 flex-col">
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
		</div>
		<div class="section_4 flex-col">
			<div class="text-group_6 flex-col justify-between">
				<span class="text_34">信息多样化&nbsp;使用便捷</span>
				<span class="text_35">多种信息架构，适合多种使用要求，简单大方便捷</span>
			</div>
			<div class="block_4 flex-row justify-between">
				<div class="image-wrapper_5 flex-col">
					<img
						class="image_19"
						referrerpolicy="no-referrer"
						src="https://lanhu-oss.lanhuapp.com/SketchPng933ef4b0d5d21dc82e2f23f2c4f382421f1e9850f23cf328683bd962f65075e3"
					/>
				</div>
				<img
					class="image_20"
					referrerpolicy="no-referrer"
					src="https://lanhu-oss.lanhuapp.com/SketchPngd78039fa433997a123c49bd7561d0c51aa2d7af7ebb16c691c2f5c4822d7f85d"
				/>
			</div>
			<div class="block_5 flex-row justify-between">
				<div class="group_6 flex-row justify-between">
					<div class="box_10 flex-col">
						<div class="section_5 flex-col"></div>
						<img
							class="image_21"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng018a09081b35ecc4b49eb7aa752601329165e787f13f660c13a3d4b477bcbd03"
						/>
					</div>
					<div class="box_11 flex-col">
						<div class="block_6 flex-col"></div>
						<img
							class="image_22"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng20c215c65418f2983f0ef61b35e24b0b66a9800e810aaca0104b460976471bd7"
						/>
					</div>
					<div class="box_12 flex-col">
						<div class="box_13 flex-col"></div>
						<img
							class="image_23"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng0db92666c720ba062639d5753a5fe2cfb761130e7acb8ecb34fd1669dace0fa1"
						/>
					</div>
				</div>
				<img
					class="image_24"
					referrerpolicy="no-referrer"
					src="https://lanhu-oss.lanhuapp.com/SketchPng24ceff90b0a3fdcb2df0551f5e22f1742612883c10c2bb3b9c424787ef4a99ce"
				/>
			</div>
			<div class="text-wrapper_5 flex-row">
				<span class="text_36">信息发布</span>
				<span class="text_37">校园风采</span>
				<span class="text_38">网络留言</span>
				<span class="text_39">拓展第三方接口</span>
			</div>
			<span class="text_40">支持自由换肤&nbsp;&nbsp;自定义通话原则</span>
			<div class="image-wrapper_6 flex-col">
				<img
					class="image_25"
					referrerpolicy="no-referrer"
					src="https://lanhu-oss.lanhuapp.com/SketchPnge880aa385e949ca9aff8448aa13cc1a2f89924b53956cc9a146cb5820225a90a"
				/>
			</div>
			<img
				class="image_26"
				referrerpolicy="no-referrer"
				src="https://lanhu-oss.lanhuapp.com/SketchPngfd328f6d123755047d5ea2b73d00f13bba0c4371d9b41be018cacd9d9873740d"
			/>
		</div>
		<div class="section_6 flex-col">
			<div class="text-wrapper_6 flex-row">
				<span class="text_41">消息通知强提醒</span>
			</div>
			<div class="box_14 flex-row">
				<div class="group_7 flex-col justify-between">
					<div class="image-text_1 flex-col justify-between">
						<img
							class="image_27"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPngea4a1053036e6a9c73f9bd2707eef42a5a133e9f2e7e52ac9e393f069857bb64"
						/>
						<span class="text-group_7">响铃</span>
					</div>
					<div class="image-text_2 flex-col justify-between">
						<img
							class="image_28"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng70ac643c7bb363ba4ac27ea325e8dbe0222c99363d57bf9d6780613aa82a8564"
						/>
						<span class="text-group_8">震动</span>
					</div>
					<div class="image-text_3 flex-col justify-between">
						<img
							class="image_29"
							referrerpolicy="no-referrer"
							src="https://lanhu-oss.lanhuapp.com/SketchPng5b89c39a3a13cb86478b373e66d80d3966bf6cd77c2534405451f1f8f96d30fa"
						/>
						<span class="text-group_9">弹窗</span>
					</div>
				</div>
				<img
					class="image_30"
					referrerpolicy="no-referrer"
					src="https://lanhu-oss.lanhuapp.com/SketchPng7ff68b4623e404de8fcca8e83e88a145d904de6df9a0493a020a26a731914779"
				/>
				<img
					class="image_31"
					referrerpolicy="no-referrer"
					src="https://lanhu-oss.lanhuapp.com/SketchPng600a4b5c28c71eada41e7b41e52e9d8e630d53cb453861e6813e5d6b44fa2054"
				/>
			</div>
		</div>
		<div class="section_7 flex-col">
			<div class="section_8 flex-col">
				<span class="text_42">规格参数</span>
				<div class="grid_1 flex-row">
					<div
						v-for="(item, index) in loopData0"
						:key="index"
						class="image-text_4 flex-row"
					>
						<img class="image_32" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
						<div v-if="item.slot5 === 5" class="box_15 flex-col justify-between">
							<div class="text-group_10 flex-col justify-between">
								<span class="text_43">WIFI</span>
								<span class="text_44">2.4G/5G&nbsp;支持IEEE</span>
							</div>
							<span class="text_45">802.11&nbsp;a/b/g/n/ac</span>
						</div>
						<div v-if="item.slot3 === 3" class="text-group_11 flex-col justify-between">
							<span class="text_46">NFC</span>
							<span class="text_47">13.56HMZ</span>
						</div>
						<div v-if="item.slot4 === 4" class="text-wrapper_7 flex-col justify-between">
							<span class="text_48" v-html="item.specialSlot4.lanhutext0"></span>
							<span class="text_49" v-html="item.specialSlot4.lanhutext1"></span>
						</div>
						<div v-if="item.slot2 === 2" class="text-group_12 flex-col">
							<span class="text_50" v-html="item.specialSlot2.lanhutext0"></span>
							<span class="text_51" v-html="item.specialSlot2.lanhutext1"></span>
							<span class="text_52" v-html="item.specialSlot2.lanhutext2"></span>
						</div>
						<div v-if="item.slot1 === 1" class="text-group_13 flex-col justify-between">
							<span class="text_53">操作系统</span>
							<span class="text_54">Android&nbsp;7.1</span>
						</div>
					</div>
				</div>
			</div>
			<span class="text_55">应用场景</span>
			<div class="grid_2 flex-row">
				<div
					v-for="(item, index) in loopData1"
					:key="index"
					class="image-text_5 flex-col justify-between"
				>
					<div class="block_7 flex-col" :style="{ background: item.lanhuBg1 }"></div>
					<span class="text-group_14" v-html="item.lanhutext0"></span>
				</div>
			</div>
		</div>
		<div class="section_9 flex-col">
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
		</div>
	</div>
</template>
<style lang="scss" scoped>
.section_2 {
	position: relative;
	width: 1920px;
	height: 2586px;
	.box_1 {
		background-color: rgba(249, 249, 249, 1);
		width: 1920px;
		height: 746px;
		.text_3 {
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
		.box_2 {
			width: 1167px;
			height: 174px;
			margin: 104px 0 0 364px;
			.box_3 {
				width: 154px;
				height: 174px;
				.image_4 {
					width: 104px;
					height: 104px;
					margin-left: 25px;
				}
				.text_4 {
					width: 154px;
					height: 30px;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 22px;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 30px;
					margin-top: 40px;
					&:nth-child(4n) {
						margin-right: 0;
					}
					&:nth-last-child(-n + 2) {
						margin-bottom: 0;
					}
				}
			}
			.box_4 {
				width: 198px;
				height: 174px;
				margin-left: 84px;
				.image-wrapper_1 {
					height: 104px;
					margin-left: 47px;
					width: 104px;
					.image_5 {
						width: 77px;
						height: 96px;
						margin: 4px 0 0 13px;
					}
				}
				.text_5 {
					width: 198px;
					height: 30px;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 22px;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 30px;
					margin-top: 40px;
					&:nth-child(2n) {
						margin-right: 0;
					}
					&:nth-last-child(-n + 2) {
						margin-bottom: 0;
					}
				}
			}
			.box_5 {
				width: 132px;
				height: 173px;
				margin-left: 100px;
				.image_6 {
					width: 104px;
					height: 104px;
					margin-left: 14px;
				}
				.text_6 {
					width: 132px;
					height: 30px;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 22px;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 30px;
					margin-top: 39px;
				}
			}
			.box_6 {
				width: 176px;
				height: 174px;
				margin-left: 101px;
				.image_7 {
					width: 104px;
					height: 104px;
					margin-left: 36px;
				}
				.text_7 {
					width: 176px;
					height: 30px;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 22px;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 30px;
					margin-top: 40px;
				}
			}
			.box_7 {
				width: 104px;
				height: 174px;
				margin-left: 118px;
				.image_8 {
					width: 104px;
					height: 104px;
				}
				.text_8 {
					width: 88px;
					height: 30px;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 22px;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					text-align: left;
					white-space: nowrap;
					line-height: 30px;
					margin: 40px 0 0 8px;
				}
			}
		}
		.text-wrapper_1 {
			width: 1232px;
			height: 120px;
			margin: 24px 0 147px 344px;
			.text_9 {
				width: 193px;
				height: 90px;
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 20px;
				font-weight: normal;
				text-align: right;
				line-height: 30px;
			}
			.text_10 {
				width: 193px;
				height: 90px;
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 20px;
				font-weight: normal;
				text-align: right;
				line-height: 30px;
				margin-left: 67px;
			}
			.text_11 {
				width: 193px;
				height: 60px;
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 20px;
				font-weight: normal;
				text-align: right;
				line-height: 30px;
				margin-left: 69px;
			}
			.text_12 {
				width: 193px;
				height: 120px;
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 20px;
				font-weight: normal;
				text-align: right;
				line-height: 30px;
				margin-left: 65px;
			}
			.text_13 {
				width: 193px;
				height: 60px;
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 20px;
				font-weight: normal;
				text-align: right;
				line-height: 30px;
				margin-left: 66px;
			}
		}
	}
	.box_8 {
		background-color: rgba(73, 73, 73, 1);
		position: absolute;
		left: 0;
		top: 745px;
		width: 1920px;
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
.section_4 {
	background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/61851c89e7e74778af36b07264ddb6b2_mergeImage.png);
	position: relative;
	width: 1920px;
	height: 2791px;
	margin-top: -19px;
	.text-group_6 {
		width: 660px;
		height: 147px;
		margin: 107px 0 0 630px;
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
			.image_19 {
				width: 339px;
				height: 543px;
				margin: 82px 0 0 222px;
			}
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
}
.section_6 {
	background-color: rgba(33, 33, 33, 1);
	height: 1152px;
	margin-top: -8px;
	width: 1920px;
	.text-wrapper_6 {
		width: 420px;
		height: 89px;
		margin: 88px 0 0 750px;
		.text_41 {
			width: 420px;
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
	}
	.box_14 {
		width: 1114px;
		height: 739px;
		margin: 90px 0 146px 411px;
		.group_7 {
			width: 170px;
			height: 739px;
			.image-text_1 {
				width: 170px;
				height: 228px;
				.image_27 {
					width: 170px;
					height: 170px;
				}
				.text-group_7 {
					width: 54px;
					height: 38px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 27px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 38px;
					margin: 20px 0 0 58px;
				}
			}
			.image-text_2 {
				width: 170px;
				height: 228px;
				margin-top: 28px;
				.image_28 {
					width: 170px;
					height: 170px;
				}
				.text-group_8 {
					width: 54px;
					height: 38px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 27px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 38px;
					margin: 20px 0 0 58px;
				}
			}
			.image-text_3 {
				width: 170px;
				height: 227px;
				margin-top: 28px;
				.image_29 {
					width: 170px;
					height: 170px;
				}
				.text-group_9 {
					width: 54px;
					height: 38px;
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 27px;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 38px;
					margin: 19px 0 0 58px;
				}
			}
		}
		.image_30 {
			width: 372px;
			height: 739px;
			margin-left: 169px;
		}
		.image_31 {
			width: 372px;
			height: 739px;
			margin-left: 31px;
		}
	}
}
.section_7 {
	width: 1920px;
	height: 2202px;
	margin-bottom: 1px;
	.section_8 {
		background-color: rgba(249, 249, 249, 1);
		width: 1920px;
		height: 899px;
		.text_42 {
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
		.grid_1 {
			width: 1281px;
			height: 514px;
			flex-wrap: wrap;
			margin: 80px 0 128px 320px;
			.image-text_4 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 8px;
				width: 298px;
				height: 152px;
				margin: 0 29px 29px 0;
				&:nth-child(4n) {
					margin-right: 0;
				}
				&:nth-last-child(-n + 2) {
					margin-bottom: 0;
				}
				.image_32 {
					width: 96px;
					height: 96px;
					margin: 32px 0 0 24px;
				}
				.box_15 {
					width: 138px;
					height: 92px;
					margin: 34px 24px 0 16px;
					.text-group_10 {
						width: 137px;
						height: 68px;
						.text_43 {
							width: 50px;
							height: 36px;
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 24px;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							text-align: left;
							white-space: nowrap;
							line-height: 36px;
						}
						.text_44 {
							width: 137px;
							height: 24px;
							overflow-wrap: break-word;
							color: rgba(102, 102, 102, 1);
							font-size: 16px;
							font-weight: normal;
							text-align: left;
							white-space: nowrap;
							line-height: 24px;
							margin-top: 8px;
						}
					}
					.text_45 {
						width: 138px;
						height: 24px;
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 16px;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 24px;
					}
				}
				.text-group_11 {
					width: 76px;
					height: 68px;
					margin: 34px 86px 0 16px;
					.text_46 {
						width: 50px;
						height: 36px;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24px;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						text-align: left;
						white-space: nowrap;
						line-height: 36px;
					}
					.text_47 {
						width: 76px;
						height: 24px;
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 16px;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 24px;
						margin-top: 8px;
					}
				}
				.text-wrapper_7 {
					width: 144px;
					height: 84px;
					margin: 34px 18px 0 16px;
					.text_48 {
						width: 72px;
						height: 36px;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24px;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						text-align: left;
						white-space: nowrap;
						line-height: 36px;
					}
					.text_49 {
						width: 146px;
						height: 24px;
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 16px;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 24px;
						margin-top: 24px;
					}
				}
				.text-group_12 {
					width: 143px;
					height: 92px;
					margin: 34px 19px 0 16px;
					.text_50 {
						width: 120px;
						height: 36px;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24px;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						text-align: left;
						white-space: nowrap;
						line-height: 36px;
					}
					.text_51 {
						width: 143px;
						height: 24px;
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 16px;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 24px;
						margin-top: 8px;
					}
					.text_52 {
						width: 145px;
						height: 24px;
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 16px;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 24px;
					}
				}
				.text-group_13 {
					width: 96px;
					height: 84px;
					margin: 34px 66px 0 16px;
					.text_53 {
						width: 96px;
						height: 36px;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 24px;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						text-align: left;
						white-space: nowrap;
						line-height: 36px;
					}
					.text_54 {
						width: 83px;
						height: 24px;
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 16px;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 24px;
						margin-top: 24px;
					}
				}
			}
		}
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
