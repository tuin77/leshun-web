<script setup lang="ts">
import { ref, reactive } from "vue";
const logo = ref(null);

const open = ref(false);

const isMobile = ref(false);

const navLinks = ref([
	{
		label: "产品",
		id: "xtopzcp",
		class: "xtopzcp",
		hasArrow: true,
		arrowClass: "x_arrvcp",
		isDropdown: false
	},
	{
		label: "解决方案",
		id: "xjjfa",
		class: "xjjfa",
		hasArrow: true,
		arrowClass: "x_arrvfa",
		isDropdown: false
	},
	{
		label: "案例",
		class: "xtopzlb",
		url: "https://www.shengwang.cn/usecase/",
		isLink: true
	},
	{
		label: "开发者",
		id: "xtopzkfz",
		class: "xtopzkfz",
		hasArrow: true,
		arrowClass: "x_arrvkf",
		isDropdown: false
	},
	{
		label: "Demo",
		id: "xtopzlb",
		class: "xtopzlb",
		hasArrow: true,
		arrowClass: "x_arrvst2",
		isDropdown: false
	},
	{
		label: "生态合作",
		id: "xtopzsthz",
		class: "xtopzsthz",
		hasArrow: true,
		arrowClass: "x_arrvst",
		isDropdown: false
	},
	{
		label: "价格",
		class: "xtopzlb",
		url: "https://www.shengwang.cn/price/",
		isLink: true
	},
	{
		label: "关于声网",
		id: "xgysw",
		class: "xgysw",
		hasArrow: true,
		arrowClass: "x_arrvgy",
		isDropdown: false
	}
]);

onMounted(() => {
	isMobile.value = "ontouchstart" in document.documentElement;
	// 定义定时器变量
	const timers = {
		cp: { hover: null, leave: null },
		jjfa: { hover: null, leave: null }
	};

	// 通用的显示/隐藏菜单函数
	function showMenu(menuId, btnId, arrowClass) {
		return function () {
			clearTimeout(timers[menuId].leave);
			timers[menuId].hover = setTimeout(() => {
				const menu = document.getElementById(`xdnr${menuId}`);
				const btn = menu.querySelector(".btn").children[0];

				menu.style.display = "block";
				btn.children[0].style.background = "#fff";
				btn.children[0].style.color = "#099DFD";
				btn.children[1].style.display = "block";

				const conChildren = menu.querySelector(".con").children;
				Array.from(conChildren).forEach((child, i) => {
					child.style.display = i === 0 ? "block" : "none";
				});

				document.querySelector(`.${arrowClass}`).classList.replace("x_zk", "x_sq");
			}, 400);
		};
	}

	// 通用的隐藏菜单函数
	function hideMenu(menuId, btnId, arrowClass) {
		return function () {
			clearTimeout(timers[menuId].hover);
			timers[menuId].leave = setTimeout(() => {
				const menu = document.getElementById(`xdnr${menuId}`);

				menu.style.display = "none";
				menu.querySelectorAll(".btn > *").forEach((btn) => {
					btn.children[0].style.background = "none";
					btn.children[0].style.color = "#242F3D";
					btn.children[1].style.display = "none";
				});

				document.getElementById(btnId).style.color = "#242F3D";
				document.querySelector(`.${arrowClass}`).classList.replace("x_sq", "x_zk");
			}, 400);
		};
	}

	// 简单菜单的显示/隐藏函数
	function toggleSimpleMenu(menuId, btnId, arrowClass) {
		const show = () => {
			document.getElementById(menuId).style.display = "block";
			document.querySelector(`.${arrowClass}`).classList.replace("x_zk", "x_sq");
		};

		const hide = () => {
			document.getElementById(menuId).style.display = "none";
			document.getElementById(btnId).style.color = "#242F3D";
			document.querySelector(`.${arrowClass}`).classList.replace("x_sq", "x_zk");
		};

		return { show, hide };
	}

	// 绑定产品菜单事件
	["mouseenter", "mouseleave"].forEach((event) => {
		document
			.getElementById("xtopzcp")
			.addEventListener(
				event,
				event === "mouseenter"
					? showMenu("cp", "xtopzcp", "x_arrvcp")
					: hideMenu("cp", "xtopzcp", "x_arrvcp")
			);
		document
			.getElementById("xdnrcp")
			.addEventListener(
				event,
				event === "mouseenter"
					? showMenu("cp", "xtopzcp", "x_arrvcp")
					: hideMenu("cp", "xtopzcp", "x_arrvcp")
			);
	});

	// 绑定解决方案菜单事件
	["mouseenter", "mouseleave"].forEach((event) => {
		document
			.getElementById("xjjfa")
			.addEventListener(
				event,
				event === "mouseenter"
					? showMenu("jjfa", "xjjfa", "x_arrvfa")
					: hideMenu("jjfa", "xjjfa", "x_arrvfa")
			);
		document
			.getElementById("xdnrjjfa")
			.addEventListener(
				event,
				event === "mouseenter"
					? showMenu("jjfa", "xjjfa", "x_arrvfa")
					: hideMenu("jjfa", "xjjfa", "x_arrvfa")
			);
	});

	// 绑定其他简单菜单事件
	["kfz", "gysw", "sthz"].forEach((id) => {
		const menu = toggleSimpleMenu(`xdnr${id}`, `xtopz${id}`, `x_arrv${id}`);
		// document.getElementById(`xtopz${id}`).addEventListener("mouseenter", menu.show);
		// document.getElementById(`xtopz${id}`).addEventListener("mouseleave", menu.hide);
		document.getElementById(`xdnr${id}`).addEventListener("mouseenter", menu.show);
		document.getElementById(`xdnr${id}`).addEventListener("mouseleave", menu.hide);
	});

	// Demo菜单特殊处理
	const demoMenu = toggleSimpleMenu("xdnrsthz2", "xtopzlb", "x_arrvst2");
	["mouseenter", "mouseleave"].forEach((event) => {
		const handler = event === "mouseenter" ? demoMenu.show : demoMenu.hide;
		const elements = ["xtopzlb", "xdnrsthz2"];
		elements.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				element.addEventListener(event, handler);
			}
		});
	});

	// 滚动处理
	let topDistinct = 0;
	window.addEventListener("scroll", () => {
		const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;

		if (scrollHeight > 20 && scrollHeight > topDistinct) {
			document.querySelectorAll(".xtopz").forEach((el) => (el.style.display = "none"));
			document.querySelector(".xtop").style.backgroundColor = "rgba(255,255,255,0.7)";
		} else {
			document.querySelectorAll(".xtopz").forEach((el) => (el.style.display = "block"));
			document.querySelector(".xtop").style.backgroundColor = "rgba(255,255,255,1)";
		}

		topDistinct = scrollHeight;
	});
});

function handleMouseenter(event: Event, item: any) {
	if (!item.id) return;
	item.isDropdown = true;
}
function handleMouseLeave(event: Event, item: any) {
	if (!item.id) return;
	item.isDropdown = false;
}
</script>

<template>
	<div
		class="templateComp-default-style"
		style="margin-top: 10px; margin-right: 0px; margin-bottom: 20px; margin-left: 0px"
	>
		<div class="nav-warp">
			<div class="xtop" style="background-color: rgb(255, 255, 255)">
				<div class="xtopt">
					<a href="https://www.shengwang.cn/">
						<div class="xtopl"></div>
					</a>
					<div class="xtopz" style="">
						<div
							v-for="item in navLinks"
							:id="item.id"
							:key="item.id"
							:class="item.class"
							:data-info="item"
							@mouseenter="(event) => handleMouseenter(event, item)"
							@mouseleave="(event) => handleMouseLeave(event, item)"
						>
							<template v-if="!item.isLink">
								{{ item.label }}
								<div :class="['x_arrvcp', item.isDropdown ? 'x_zk' : 'x_sq']"></div>
							</template>
							<a v-else :href="item.url">{{ item.label }}</a>
						</div>
					</div>
				</div>
			</div>
			<div class="xtop2">
				<div class="xtopt">
					<div id="xdnrkfz" class="xdnrkfz">
						<div class="x_tblb2">
							<div class="x_wdang"></div>
							<div class="x_tblbr2">
								<div class="x_tblbrt2">
									<a href="https://doc.shengwang.cn/" target="_blank">文档</a>
								</div>
								<div class="x_tblbrb2">
									RTE 产品/服务的详细说明、SDK 下载、开发指南、示例项目、常见问题解答
								</div>
							</div>
						</div>
						<div class="x_tblb2">
							<div class="x_demoapp"></div>
							<div class="x_tblbr2">
								<div class="x_tblbrt2">
									<a href="https://doc.shengwang.cn/codebox" target="_blank">Demo</a>
								</div>
								<div class="x_tblbrb2">
									RTE产品的演示应用，亲自体验和了解产品的实际效果
								</div>
							</div>
						</div>
						<div class="x_tblb2">
							<div class="x_zxsq"></div>
							<div class="x_tblbr2">
								<div class="x_tblbrt2">
									<a href="https://www.shengwang.cn/cn/community/" target="_blank"
										>在线社区</a
									>
								</div>
								<div class="x_tblbrb2">
									提出问题、分享经验、寻求帮助或与其他用户进行讨论
								</div>
							</div>
						</div>
					</div>
					<div id="xdnrgysw" class="xdnrgysw" style="display: none">
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/aboutus/">企业介绍</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/news/">新闻中心</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/jointlab/">声网实验室</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/jointlab/rte-standard/">RTC 行业标准</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/compliance/">安全合规</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://www.shengwang.cn/corporate-responsibility/">企业责任</a>
						</div>
						<div class="xdnrgyswlb">
							<a href="https://app.mokahr.com/apply/agora/6334#/" target="_blank"
								>加入我们</a
							>
						</div>
					</div>
					<div id="xdnrsthz" class="xdnrsthz">
						<div class="xdnrsthzlb">
							<a href="https://www.shengwang.cn/ecosystem/">
								<div class="x_stjs"></div>
								<div style="float: left">生态介绍</div>
							</a>
						</div>
						<div class="xdnrsthzlb">
							<a href="https://www.shengwang.cn/ecosystem/shengxuan/">
								<div class="x_sxjh"></div>
								<div style="float: left">声选计划</div>
							</a>
						</div>
						<div class="xdnrsthzlb">
							<a href="https://www.shengwang.cn/ecosystem/supersonic/">
								<div class="x_cysjh"></div>
								<div style="float: left">超音速计划</div>
							</a>
						</div>
					</div>

					<div id="xdnrsthz2" class="xdnrsthz2">
						<div class="xdnrsthzlb">
							<a
								href="https://doc.shengwang.cn/codebox?_gl=1*1hp5rsc*_gcl_au*MTExNDM4MjgzMS4xNzI5NjU1ODY0*_ga*NzM2MjM2MDcyLjE3MjkyNDU4ODc.*_ga_BFVGG7E02W*MTczMDE2OTE5OC4xNi4wLjE3MzAxNjkyMDMuMC4wLjA."
								target="_blank"
							>
								<div class="x_demo"></div>
								<div style="float: left">Demo下载</div>
							</a>
						</div>
						<div class="xdnrsthzlb">
							<a href="https://rte-experience.shengwang.cn/" target="_blank">
								<div class="x_tyg"></div>
								<div style="float: left">RTE 体验馆</div>
							</a>
						</div>
					</div>
				</div>

				<div id="xdnrcp" class="xdnrcp">
					<div class="xdnrz">
						<div class="hezi">
							<div class="btnnav">
								<ul class="btn">
									<li>
										<div class="zcwz">全部产品</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">实时互动基础能力</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">实时互动扩展能力</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">低代码应用平台</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">云市场</div>
										<div class="zctb"></div>
									</li>
								</ul>
							</div>
							<div class="box">
								<ul class="con">
									<li class="current">
										<div class="x_qb">
											<div class="x_qbbt">实时互动基础能力</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/voicecall/">语音通话</a>
												</div>
												<div class="x_qblbb">一对一，多对多人实时语音通话</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/videocall/">视频通话</a>
												</div>
												<div class="x_qblbb">一对一，多对多人实时视频通话</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/live/">直播</a>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_qblbb">
													提供低延时、强同步、大并发、高质量的互动直播能力
												</div>
												<div class="x_qblbz">
													<a
														href="https://www.shengwang.cn/interactive-live-streaming-premium/"
													>
														<div style="float: left">互动直播</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_qblbz">
													<a
														href="https://www.shengwang.cn/interactive-live-streaming-standard/"
													>
														<div style="float: left">极速直播</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_qblbz">
													<a href="https://www.shengwang.cn/fls/">
														<div style="float: left">融合CDN</div>
														<div class="gd"></div>
													</a>
												</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/realtimemessage/"
															>实时消息</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_qblbb">
													低延时、高并发、高可靠的全球信令与消息云服务
												</div>
											</div>
										</div>
										<div class="x_qb">
											<div class="x_qbbt">实时互动扩展能力</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/agora-analytics/">水晶球</a>
												</div>
												<div class="x_qblbb">实时监控、告警通知、通话调查、数据洞察</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/interactive-whiteboard/"
														>互动白板</a
													>
												</div>
												<div class="x_qblbb">H5 课件、动态PPT、轨迹与音视频同步</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/recording/">实时录制</a>
												</div>
												<div class="x_qblbb">云端录制、本地服务端录制、页面录制</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/ai-engine/">凤鸣 AI 引擎</a>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_qblbb">新一代音频技术智能引擎</div>
												<div class="x_qblbz">
													<a href="https://www.shengwang.cn/3D-spatial/">
														<div style="float: left">空间音频</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_qblbz">
													<a href="https://www.shengwang.cn/AI-denoiser/">
														<div style="float: left">AI降噪</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_qblbz">
													<a href="https://www.shengwang.cn/VirtualSoundCard/">
														<div style="float: left">虚拟声卡2.0</div>
														<div class="gd"></div>
													</a>
												</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a target="_blank" href="https://status.shengwang.cn/"
															>Status Page</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_qblbb">
													集中展示声网主要产品及服务的综合服务质量及可用性信息
												</div>
											</div>
										</div>
										<div class="x_qb">
											<div class="x_qbbt">低代码应用平台</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/flexible-meeting/"
															>灵动会议</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_qblbb">
													易开发、可扩展、高可靠、优体验的全新会议平台
												</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/agora-flexible-classroom/"
														>灵动课堂</a
													>
												</div>
												<div class="x_qblbb">15 分钟上线自由品牌互动教学平台</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/iot-platform/"
														>灵隼物联网云平台</a
													>
												</div>
												<div class="x_qblbb">「耳聪目明」智能硬件音视频体验升级</div>
											</div>
										</div>
										<div class="x_qb">
											<div class="x_qbbt">云市场</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<div style="float: left">
														<a
															href="https://www.shengwang.cn/cn/marketplace?category=video-effects"
															>视频特效</a
														>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_qblbb">美颜、贴纸、3D特效</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a
														href="https://www.shengwang.cn/cn/marketplace?category=audio-effects"
														>音频特效</a
													>
												</div>
												<div class="x_qblbb">实时变声、音色定制</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a href="https://www.shengwang.cn/cn/marketplace?category=nlp"
														>自然语言处理</a
													>
												</div>
												<div class="x_qblbb">实时转写、实时翻译</div>
											</div>
											<div class="x_qblb">
												<div class="x_qblbt">
													<a
														href="https://www.shengwang.cn/cn/marketplace?category=content-moderation"
														>内容审核</a
													>
												</div>
												<div class="x_qblbb">音频审核、视频审核、多语种审核</div>
											</div>
										</div>
									</li>
									<li>
										<div class="x_sl">
											<div class="x_sll">
												<div class="x_tblb">
													<div class="x_yyth"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/voicecall/">语音通话</a>
														</div>
														<div class="x_tblbrb">一对一，多对多实时语音通话</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_spth"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/videocall/">视频通话</a>
														</div>
														<div class="x_tblbrb">一对一，多对多实时视频通话</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_jstxim"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/instantmessage/"
																>即时通讯 IM</a
															>
														</div>
														<div class="x_tblbrb">
															单聊、群聊、聊天室、系统通知等 IM 功能
														</div>
													</div>
												</div>
												<div class="x_tblb" style="min-height: 80px">
													<div class="x_yxl"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/realtimemessage/"
																	>实时消息</a
																>
															</div>
															<div class="NEW"></div>
														</div>
														<div class="x_tblbrb">
															低延时、高并发、高可靠的全球信令与消息云服务
														</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_js"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/rtsa/">加速</a>
														</div>
														<div class="x_tblbrb">具备 QoS 保障的全球端到端加速服务</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_zb"></div>
													<div class="x_tblbr">
														<div class="x_qblbt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/live/">直播</a>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_qblbb">
															提供低延时、强同步、大并发、高质量的互动直播能力
														</div>
														<div class="x_qblbz">
															<a
																href="https://www.shengwang.cn/interactive-live-streaming-premium/"
															>
																<div style="float: left">互动直播</div>
																<div class="gd"></div>
															</a>
														</div>
														<div class="x_qblbz">
															<a
																href="https://www.shengwang.cn/interactive-live-streaming-standard/"
															>
																<div style="float: left">极速直播</div>
																<div class="gd"></div>
															</a>
														</div>
														<div class="x_qblbz">
															<a href="https://www.shengwang.cn/fls/">
																<div style="float: left">融合CDN</div>
																<div class="gd"></div>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div class="x_sl">
											<div class="x_sll">
												<div class="x_tblb">
													<div class="x_sjq"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/agora-analytics/"
																	>水晶球</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">
															实时监控、告警通知、通话调查、数据洞察
														</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_hdbb"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/interactive-whiteboard/"
																>互动白板</a
															>
														</div>
														<div class="x_tblbrb">H5 课件、动态PPT、轨迹与音视频同步</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_sslz"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<a href="https://www.shengwang.cn/recording/">实时录制</a>
														</div>
														<div class="x_tblbrb">云端录制、本地服务端录制、页面录制</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_fmyq"></div>
													<div class="x_tblbr">
														<div class="x_qblbt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/ai-engine/"
																	>凤鸣 AI 引擎</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_qblbb">新一代音频技术智能引擎</div>
														<div class="x_qblbz">
															<a href="https://www.shengwang.cn/3D-spatial/">
																<div style="float: left">空间音频</div>
																<div class="gd"></div>
															</a>
														</div>
														<div class="x_qblbz">
															<a href="https://www.shengwang.cn/AI-denoiser/">
																<div style="float: left">AI降噪</div>
																<div class="gd"></div>
															</a>
														</div>
														<div class="x_qblbz">
															<a href="https://www.shengwang.cn/VirtualSoundCard/">
																<div style="float: left">虚拟声卡2.0</div>
																<div class="gd"></div>
															</a>
														</div>
													</div>
												</div>
												<!-- 20241107 -->
												<div class="x_tblb">
													<div class="x_status"></div>
													<div class="x_tblbr" style="float: none">
														<div class="x_tblbrt">
															<div style="float: left">
																<a href="https://status.shengwang.cn/" target="_blank"
																	>Status Page</a
																>
															</div>
															<div class="NEW"></div>
														</div>
														<div class="x_tblbrb">
															集中展示声网主要产品及服务的综合服务质量及可用性信息
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="x_sl">
											<div class="x_sll">
												<div class="x_tblb">
													<div class="x_ldkt"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/agora-flexible-classroom/"
																	>灵动课堂</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">15 分钟上线自由品牌互动教学平台</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_wlwpt"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a href="https://www.shengwang.cn/iot-platform/"
																	>灵隼物联网云平台</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">「耳聪目明」智能硬件音视频体验升级</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="x_sl">
											<div class="x_sll">
												<div class="x_tblb">
													<div class="x_sptx"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/cn/marketplace?category=video-effects"
																	>视频特效</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">美颜、贴纸、3D特效</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_yptx"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/cn/marketplace?category=audio-effects"
																	>音频特效</a
																>
															</div>
															<div class="NEW"></div>
														</div>
														<div class="x_tblbrb">实时变声、音色定制</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_zryy"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/cn/marketplace?category=nlp"
																	>自然语言处理</a
																>
															</div>
															<div class="NEW"></div>
														</div>
														<div class="x_tblbrb">实时转写、实时翻译</div>
													</div>
												</div>
												<div class="x_tblb">
													<div class="x_nrsh"></div>
													<div class="x_tblbr">
														<div class="x_tblbrt">
															<div style="float: left">
																<a
																	href="https://www.shengwang.cn/cn/marketplace?category=content-moderation"
																	>内容审核</a
																>
															</div>
															<div class="hot"></div>
														</div>
														<div class="x_tblbrb">音频审核、视频审核、多语种审核</div>
													</div>
												</div>
											</div>
											<!-- <div class="x_slr">
                                <div class="rmtj">热门推荐</div>
                                <div class="x_tblbyc">
                                    <div class="x_tblbycl"></div>
                                    <div class="x_tblbycr">
                                      <div class="x_tblbycrt">高清升级 5 折起</div>
                                      <div class="x_tblbycrb">低延时、强同步、大并发、高质量的互动</div>
                                      <div class="x_tblbycrz"><div style="float: left;"><a href="https://www.shengwang.cn/campaign/HD-video/">立即体验</a></div><div class="gd"></div></div>
                                    </div>
                                </div>
                            </div> -->
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div id="xdnrjjfa" class="xdnrjjfa">
					<div class="xdnrz">
						<div class="hezi">
							<div class="btnnav">
								<ul class="btn">
									<li>
										<div class="zcwz">Hot &amp; New <i class="hot1"></i></div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">出海</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">K歌 &amp; 语聊</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">直播</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">社交</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">游戏</div>
										<div class="zctb"></div>
									</li>

									<li>
										<div class="zcwz">AIGC</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">在线教育</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">智能硬件</div>
										<div class="zctb"></div>
									</li>
									<li>
										<div class="zcwz">数字化转型</div>
										<div class="zctb"></div>
									</li>
								</ul>
							</div>
							<div class="box">
								<ul class="con">
									<!-- hot&new -->
									<li class="current">
										<div class="bannerList">
											<a href="https://www.shengwang.cn/solution/global/"
												><img src="./关于我们_实时音视频服务商 - 声网_files/1.png" alt=""
											/></a>
											<a href="https://www.shengwang.cn/solution/hd-video/"
												><img src="./关于我们_实时音视频服务商 - 声网_files/2.png" alt=""
											/></a>
											<a href="https://www.shengwang.cn/solution/social/"
												><img
													src="./关于我们_实时音视频服务商 - 声网_files/3.png"
													alt=""
													style="margin-right: 0"
											/></a>
											<a href="https://www.shengwang.cn/solution/aigc/"
												><img
													src="./关于我们_实时音视频服务商 - 声网_files/1730185114817-aigc.png"
													alt=""
											/></a>
											<a href="https://www.shengwang.cn/solution/sports-streaming/"
												><img src="./关于我们_实时音视频服务商 - 声网_files/5.png" alt=""
											/></a>
											<a href="https://www.shengwang.cn/solution/game/"
												><img
													src="./关于我们_实时音视频服务商 - 声网_files/6.png"
													alt=""
													style="margin-right: 0"
											/></a>
										</div>
									</li>
									<!-- 出海 -->
									<li>
										<div class="x_sl">
											<div class="x_tblbqq">
												<div class="x_sdyl"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<a href="https://www.shengwang.cn/solution/voicechat/"
															>语聊房</a
														>
													</div>
													<div class="x_tblbrb">更纯净好玩、沉浸动听的语音互动体验</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_spzbcjhz"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<a href="https://www.shengwang.cn/solution/hd-video/"
															>秀场直播</a
														>
													</div>
													<div class="x_tblbrb">人更美、物更真，开播看播更流畅</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_sj"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<div style="float: left">
															<a href="https://www.shengwang.cn/solution/social/"
																>1v1 社交</a
															>
														</div>
														<div class="hot"></div>
													</div>
													<div class="x_tblbrb">热门吸金玩法，“面对面” 心动体验</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_zxkgf"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<a href="https://www.shengwang.cn/solution/online-karaoke/"
															>K 歌 &amp; 合唱</a
														>
													</div>
													<div class="x_tblbrb">
														2.5h 快速构建合唱/抢唱/接唱等多丰富玩法
													</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_hdyx"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<div style="float: left">
															<a href="https://www.shengwang.cn/solution/meta-igame/"
																>弹幕互动游戏</a
															>
														</div>
														<div class="NEW"></div>
													</div>
													<div class="x_tblbrb">独家游戏资源储备，移动端也能随时开播</div>
												</div>
											</div>
											<div class="x_tblbqq">
												<div class="x_aigc"></div>
												<div class="x_tblbr">
													<div class="x_tblbrt">
														<div style="float: left">
															<a href="https://www.shengwang.cn/solution/aigc/">AIGC</a>
														</div>
														<div class="hot"></div>
													</div>
													<div class="x_tblbrb">AI 互动更低延时，完整方案易开发</div>
												</div>
											</div>
										</div>
									</li>
									<!-- K歌&语聊 -->
									<li>
										<div class="x_tblbqq">
											<div class="x_zxkgf"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/online-karaoke/"
														>在线 K 歌 &amp; 合唱</a
													>
												</div>
												<div class="x_tblbrb">
													2.5h 快速构建合唱/抢唱/接唱等多丰富玩法
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sdyl"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/voicechat/"
														>语聊房</a
													>
												</div>
												<div class="x_tblbrb">更纯净好玩、沉浸动听的语音互动体验</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏开黑</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">
													范围语音+空间音频，听声辨位 “吃鸡” 无压力
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">AI 陪聊</a>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">真实沉浸的虚拟语聊，快速响应更有趣</div>
											</div>
										</div>
									</li>
									<!-- 直播 -->
									<li>
										<div class="x_tblbqq">
											<div class="x_spzbcjhz"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/hd-video/"
														>秀场直播</a
													>
												</div>
												<div class="x_tblbrb">人更美、物更真，开播看播更流畅</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_ds"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/ecommerce/"
														>电商直播</a
													>
												</div>
												<div class="x_tblbrb">覆盖独立站、自建站多类平台，带货更省心</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sszb"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/sports-streaming/"
															>赛事直播</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">延时低至500ms，安全稳定更高清</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏直播</a>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">更低性能消耗，4K 60 帧超清画面不卡不晃</div>
											</div>
										</div>
									</li>
									<!-- 社交 -->
									<li>
										<div class="x_tblbqq">
											<div class="x_sj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/social/"
															>1v1 视频</a
														>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_tblbrb">随机匹配或主动邀约，极速出图秒接通</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/social/">视频相亲</a>
												</div>
												<div class="x_tblbrb">
													多方高清视频连麦，观众围观也可实时送祝福
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/social/">1v1 语音</a>
												</div>
												<div class="x_tblbrb">丝滑接通，支持美声变声趣味玩法</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_sj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/social/">互动播客</a>
												</div>
												<div class="x_tblbrb">
													一键加入兴趣/话题式开放对谈，听众随时上麦
												</div>
											</div>
										</div>
									</li>
									<!-- 游戏 -->
									<li>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏语音</a>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">AI 降噪+回声消除，更纯净的小队语音交流</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏开黑</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">
													范围语音+空间音频，听声辨位 “吃鸡” 无压力
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏直播</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">更低性能消耗，4K 60 帧超清画面不卡不晃</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/game/">游戏陪玩</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">
													虚拟声卡加持超高音质，大神 “带飞” 更好玩
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/meta-igame/"
															>弹幕互动游戏</a
														>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">独家游戏资源储备，移动端也能随时开播</div>
											</div>
										</div>
									</li>
									<!-- AIGC -->
									<li>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">语音助手</a>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_tblbrb">丰富的人设性格，实时问答支持随时打断</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">口语老师</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">大模型灵活可选，多语种教学体验更自然</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">AI 陪聊</a>
													</div>
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">24h 无缝语音陪伴，专属定制更懂你</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_aigc"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/aigc/">游戏陪玩</a>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">支持单人/多人游戏，AI玩家全程在线</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yzb"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/meta/"
															>Meta 元宇宙</a
														>
													</div>
													<!-- <div class="NEW"></div> -->
												</div>
												<div class="x_tblbrb">海量 3D 炫酷场景，Z 世代更爱玩</div>
											</div>
										</div>
									</li>
									<!-- 在线教育 -->
									<li class="">
										<div class="x_tblbqq">
											<div class="x_jysq"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/education-engine/"
															>教育超级双擎</a
														>
													</div>
													<!-- <div class="hot"></div> -->
													<div class="NEW"></div>
												</div>
												<div class="x_tblbrb">RTC+AI，体验丝滑流畅，创新互动模式</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_kjy"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/education/"
														>K12 教育</a
													>
												</div>
												<div class="x_tblbrb">高质量音视频服务，在线教育班型全覆盖</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_zycrjy"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/vocation/"
														>职业 &amp; 成人教育</a
													>
												</div>
												<div class="x_tblbrb">
													丰富的功能组件，支持低代码接入，成本灵活可控
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_jyxxh"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a
														href="https://www.shengwang.cn/solution/education-informatization/"
														>智慧教室</a
													>
												</div>
												<div class="x_tblbrb">3A 智能算法效果更优，突破硬件设备限制</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_fmyq"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/CloudStreaming/"
														>云直播教学</a
													>
												</div>
												<div class="x_tblbrb">灵活接入互动方案，流畅稳定，质量透明</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_ldkt"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/aboutus/#">素质教育</a>
												</div>
												<div class="x_tblbrb">深度还原线下体验，紧密贴合业务场景</div>
												<div class="x_tblbycrz">
													<a href="https://www.shengwang.cn/solution/music/">
														<div style="float: left">在线音乐</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_tblbycrz">
													<a href="https://www.shengwang.cn/solution/arts/">
														<div style="float: left">在线美术</div>
														<div class="gd"></div>
													</a>
												</div>
												<div class="x_tblbycrz">
													<a href="https://www.shengwang.cn/solution/stem/">
														<div style="float: left">在线STEM</div>
														<div class="gd"></div>
													</a>
												</div>
											</div>
										</div>
									</li>
									<!-- 智能硬件 -->
									<li>
										<div class="x_tblbqq">
											<div class="x_zhrj"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/smarthome/"
															>智慧人居</a
														>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_tblbrb">语音双讲，实时监控，IPC 设备“耳聪目明”</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_zncx"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/smartvehicles/"
														>智能出行</a
													>
												</div>
												<div class="x_tblbrb">无人机高清图传，车载远程语音互动</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_zncd"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a href="https://www.shengwang.cn/solution/smartdevices/"
															>智能穿戴</a
														>
													</div>
													<!-- <div class="hot"></div> -->
												</div>
												<div class="x_tblbrb">手表低功耗流畅通话，AR多人远程协作</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_pxck"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/teleoperation/"
														>平行操控</a
													>
												</div>
												<div class="x_tblbrb">
													无人值守设备应急接管，高危作业和远程服务
												</div>
											</div>
										</div>
									</li>
									<!-- 数字化转型 -->
									<li>
										<div class="x_tblbqq">
											<div class="x_xtbg"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<div style="float: left">
														<a
															href="https://www.shengwang.cn/solution/enterprise-collaboration/"
															>协同办公</a
														>
													</div>
													<div class="hot"></div>
												</div>
												<div class="x_tblbrb">视频会议、企业直播、工业协作、远程招聘</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_zxjr"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/finance/"
														>在线金融</a
													>
												</div>
												<div class="x_tblbrb">
													全渠道音视频接入，视频客服、智能双录等全场景
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_yl"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/online-health/"
														>远程医疗</a
													>
												</div>
												<div class="x_tblbrb">
													快速构建远程问诊、医疗会议、手术示教等场景
												</div>
											</div>
										</div>
										<div class="x_tblbqq">
											<div class="x_rtcsyhpt"></div>
											<div class="x_tblbr">
												<div class="x_tblbrt">
													<a href="https://www.shengwang.cn/solution/pri-rtn/"
														>RTC私有化平台</a
													>
												</div>
												<div class="x_tblbrb">
													支持专网部署，10 分钟构建企业级专有平台
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style></style>

<style>
.scs-row.scs-inner-row {
	margin-left: 0;
	margin-right: 0;
	display: table;
	table-layout: fixed;
	width: 100%;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

li,
ul {
	list-style: none;
	text-decoration: none;
	padding: 0px;
	margin: 0px;
}

li {
	list-style-type: none;
}

@media only screen and (max-width: 1060px) {
	.nav-warp {
		display: none;
	}

	.blank-nav {
		font-size: 16px;
		width: 750px;
		height: 50px;

		display: block;
		line-height: 1;
		float: left;
		flex: 1;
	}
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

img {
	margin: 0px;
	padding: 0px;
	border: none;
}

p {
	margin: 0px;
	padding: 0px;
}

em {
	font-style: normal;
}

li,
ul {
	list-style: none;
	text-decoration: none;
	padding: 0px;
	margin: 0px;
}

li {
	list-style-type: none;
}

div {
	word-wrap: break-word;
	word-break: break-all;
}

select,
input {
	outline: none;
}

a {
	color: #333;
	text-decoration: none;
}

a:hover {
	color: #099dfd;
}

/*新导航*/
* {
	margin: 0;
	padding: 0;
}

body {
	font-size: 14px;
	margin: 0 auto;
	text-align: center;
	font-family: "Microsoft YaHei";
}

img {
	margin: 0px;
	padding: 0px;
	border: none;
}

p {
	margin: 0px;
	padding: 0px;
}

em {
	font-style: normal;
}

li,
ul {
	list-style: none;
	text-decoration: none;
	padding: 0px;
	margin: 0px;
}

li {
	list-style-type: none;
}

div {
	word-wrap: break-word;
	word-break: break-all;
}

select,
input {
	outline: none;
}

a {
	color: #333;
	text-decoration: none;
}

a:hover {
	color: #099dfd;
}

.xtop {
	width: 100%;
	height: 64px;
	line-height: 64px;
	background: #ffffff;
	position: fixed;
	top: 0;
	box-shadow: 0px 4px 16px 0px rgba(31, 35, 37, 0.11);
	z-index: 6666;
}

.xtop2 {
	width: 100%;
	height: auto;
	position: fixed;
	top: 64px;
	z-index: 666;
}

.xtopt {
	max-width: 1200px;
	height: 64px;
	margin: 0 auto;
}

.xtopl {
	float: left;
	cursor: pointer;
	margin-top: 7px;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/logo_blue.svg")
		no-repeat left center;
	width: 86px;
	height: 24px;
	margin-top: 20px;
}

.xtopl img {
	width: 46px;
	height: 24px;
}

.xtopz {
	float: left;
}

.xtopzlb {
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}

.xtopzlb a {
	color: #242f3d;
	display: block;
	width: 100%;
	height: 64px;
}

.xtopzlb a:hover {
	display: block;
	width: 100%;
	height: 64px;
	color: #242f3d !important;
}

.xtopzcp {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}

.xtopzcp img {
	margin-bottom: -4px;
	transition: ease 0.5s;
}

.xdnrcp {
	width: 100%;
	height: auto;
	position: fixed;
	top: 64px;
	background: #f8f9fa;
	z-index: 5;
	display: none;
}

.xdnrjjfa {
	width: 100%;
	height: auto;
	position: fixed;
	top: 64px;
	background: #f8f9fa;
	z-index: 5;
	display: none;
}

.xdnrz {
	max-width: 1200px;
	max-height: 420px;
	background: #ffffff;
	margin: 0 auto;
}

.xdnrkfz {
	width: 335px;
	padding: 12px;
	height: auto;
	background: #ffffff;
	z-index: 3;
	margin-left: 310px;
	overflow: hidden;
	display: none;
	border-radius: 0px 0px 8px 8px;
}

.xdnrgysw {
	width: 210px;
	padding: 12px;
	height: auto;
	background: #ffffff;
	z-index: 3;
	margin-left: 730px;
	overflow: hidden;
	display: none;
	border-radius: 0px 0px 8px 8px;
}

.xdnrgyswlb {
	width: 176px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: #242f3d;
}

.xdnrgyswlb a {
	display: block;
	width: 176px;
	height: 40px;
}

.xdnrgyswlb a:hover {
	display: block;
	width: 176px;
	height: 40px;
	color: #099dfd;
	background: #f7fcff;
	border-radius: 4px;
}

.xdnrsthz {
	width: 206px;
	padding: 12px;
	height: auto;
	background: #ffffff;
	z-index: 3;
	margin-left: 550px;
	overflow: hidden;
	display: none;
	border-radius: 0px 0px 8px 8px;
}

.xdnrsthzlb {
	width: 176px;
	height: 40px;
	line-height: 40px;
	text-align: left;
	color: #242f3d;
	cursor: pointer;
	overflow: hidden;
}

.xdnrsthzlb:hover {
	display: block;
	width: 176px;
	height: 40px;
	color: #099dfd;
	background: #f7fcff;
	border-radius: 4px;
}

.xdnrsthzlb a {
	display: block;
	width: 100%;
	height: 40px;
}

.x_tblb2 {
	width: 310px;
	height: auto;
	overflow: hidden;
	padding: 10px 10px 10px 0px;
	text-align: left;
	border-radius: 8px;
	float: left;
}

.x_tblb2:hover {
	background: #f7fcff;
}

.x_tblbr2 {
	width: 250px;
	float: left;
	height: auto;
}

.x_tblbrt2 {
	font-size: 14px;
	line-height: 24px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: bold;
	color: #242f3d;
}

.x_tblbrb2 {
	color: #505e72;
	line-height: 20px;
	font-size: 12px;
}

.xjjfa {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	padding: 0px 15px 0px 27px;
	float: left;
}

.xjjfa:hover img {
	transform: rotate(180deg);
	transition-duration: 0.5s;
}

.xjjfa img {
	margin-bottom: -4px;
	transition: ease 0.5s;
}

.xtopzkfz {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}

.xtopzkfz:hover img {
	transform: rotate(180deg);
	transition-duration: 0.5s;
}

.xtopzkfz img {
	margin-bottom: -4px;
	transition: ease 0.5s;
}

.xtopzsthz {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}

.xtopzsthz:hover img {
	transform: rotate(180deg);
	transition-duration: 0.5s;
}

.xtopzsthz img {
	margin-bottom: -4px;
	transition: ease 0.5s;
}

.xgysw {
	cursor: pointer;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: 500;
	color: #242f3d;
	height: 64px;
	line-height: 64px;
	margin-left: 12px;
	padding: 0px 15px 0px 15px;
	float: left;
}

.xgysw:hover img {
	transform: rotate(180deg);
	transition-duration: 0.5s;
}

.xgysw img {
	margin-bottom: -4px;
	transition: ease 0.5s;
}

.xtopzlb:hover .xdnr {
	display: block;
}

.xdnr:hover {
	display: block;
}

.x_tblb {
	width: 32%;
	height: auto;
	overflow: hidden;
	padding: 1%;
	text-align: left;
	margin-left: 1%;
	margin-top: 20px;
	border-radius: 8px;
	float: left;
}

.x_tblb:hover {
	background: #e6f9ff;
}

.x_tblbqq {
	width: 30%;
	height: auto;
	overflow: hidden;
	padding: 1%;
	text-align: left;
	margin-left: 1%;
	margin-top: 20px;
	border-radius: 8px;
	float: left;
}

.x_tblbqq:hover {
	background: #e6f9ff;
}

.x_tblbr {
	float: left;
	height: auto;
	position: relative;
	margin-left: 50px;
}

.x_tblbrt {
	font-size: 14px;
	padding-bottom: 8px;
	font-family: PingFangSC-Medium, PingFang SC;
	font-weight: bold;
	color: #242f3d;
	overflow: hidden;
}

.x_tblbrt img {
	margin-bottom: -2px;
}

.x_tblbrb {
	color: #505e72;
	line-height: 20px;
	font-size: 12px;
	height: 36px;
}

.x_yyth {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/yyth.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_spth {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/spth.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_jstxim {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/im.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_yxl {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/RTM.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_zb {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/zb.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_js {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/js.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_sjq {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/sjq.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_hdbb {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/hdbb.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_sslz {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/sslz.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_fmyq {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/fmyq.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_ldkt {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/ldkt.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_wlwpt {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/wlwpt.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_sptx {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/sptx.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_yptx {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/yptx.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_zryy {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/zryy.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_nrsh {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/nrsh.svg")
		center top no-repeat;
	background-size: 24px 24px;
	position: absolute;
}

.x_wdang {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/wdang.svg")
		center top no-repeat;
	background-size: 24px 24px;
}

.x_sdkxz {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/sdkxz.svg")
		center top no-repeat;
	background-size: 24px 24px;
}

.x_demoapp {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/demoapp.svg")
		center top no-repeat;
	background-size: 24px 24px;
}

.x_sldm {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/sldm.svg")
		center top no-repeat;
	background-size: 24px 24px;
}

.x_zxsq {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/zxsq.svg")
		center top no-repeat;
	background-size: 24px 24px;
}

.x_yyl {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_yyl.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_yzb {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_yzb.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_aigc {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_aigc.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_hdyx {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_hdyx.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_chjjfa {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_ch.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_zxkgf {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_zxkg.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_spzbcjhz {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_zbx.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_sszb {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://web-cdn.agora.io/doc-cms/uploads/1713946947100-sszb.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_sj {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_sj.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_yx {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_yx.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_ds {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_ds.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_sdyl {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_sdyl.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_jysq {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://web-cdn.agora.io/doc-cms/uploads/1713865969316-jysq.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_zycrjy {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_zycrjy.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_szjy {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_szjy.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_kjy {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_k12jy.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_jyxxh {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_jyxxh.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_zhrj {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_zhrj.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_zncx {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_zncx.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_zncd {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_zncd.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_pxck {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_pxck.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_xtbg {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_sphy.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_zxjr {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_jr.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_yl {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_yl.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_rtcsyhpt {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_rtc.svg")
		center top no-repeat;
	background-size: 36px 36px;
	position: absolute;
}

.x_stjs {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_stjs.svg")
		center top no-repeat;
	background-size: 36px 36px;
}

.x_sxjh {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/chaoyinsu.svg")
		center top no-repeat;
	background-size: 36px 36px;
}

.x_cysjh {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/shengxuan.svg")
		center top no-repeat;
	background-size: 36px 36px;
}

.x_sq {
	width: 16px;
	height: 16px;
	float: right;
	margin-top: 24px;
	margin-left: 5px;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/sq.svg")
		center top no-repeat;
	background-size: 16px 16px;
	transform: rotate(180deg);
	transition-duration: 0.5s;
}

.x_zk {
	width: 16px;
	height: 16px;
	float: right;
	margin-top: 24px;
	margin-left: 5px;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/zk.svg")
		center top no-repeat;
	background-size: 16px 16px;
	transition-duration: 0.5s;
}

.x_sl {
	width: 100%;
	height: auto;
	overflow: hidden;
}

.x_sll {
	float: left;
	width: 100%;
}

.x_slr {
	float: right;
	width: 33%;
}

.rmtj {
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-align: left;
	color: #333;
	margin-left: 20px;
	margin-top: 25px;
	font-weight: bold;
}

.x_tblbyc {
	width: 92%;
	height: auto;
	overflow: hidden;
	padding: 12px 12px 12px 12px;
	text-align: left;
	margin-left: 10px;
	margin-bottom: 20px;
	cursor: pointer;
	border-radius: 8px;
	float: left;
	border: 1px solid #f0f4f9;
}

.x_tblbyc:hover {
	background: #f7fcff;
	border: 1px solid #c4ddfd;
}

.x_tblbyc:hover .x_tblbycrt {
	color: #099dfd;
}

.x_tblbycl {
	width: 47%;
	height: 100px;
	float: left;
	background: #d2d2d2;
	border-radius: 8px;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/banner-c1.jpg")
		no-repeat center top;
	background-size: 100% 100%;
}

.x_tblbycr {
	width: 50%;
	float: right;
}

.x_tblbycrt {
	font-size: 14px;
	font-weight: bold;
	color: #242f3d;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.x_tblbycrb {
	font-size: 12px;
	color: #505e72;
	margin-top: 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.x_tblbycrz {
	font-size: 12px;
	color: #099dfd;
	margin-top: 12px;
	text-decoration: underline;
	float: left;
	margin-right: 10px;
}

.x_tblbycrz a {
	color: #099dfd !important;
}

.x_tblbycrz:hover .gd {
	margin-left: 10px;
	transition: 0.2s all linear;
}

.gd {
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/gd.svg")
		center top no-repeat;
	background-size: 16px 16px;
	float: left;
	width: 16px;
	height: 16px;
	margin-left: 5px;
	transition: ease 0.2s;
}

.x_qb {
	width: 24%;
	height: auto;
	float: left;
	margin-left: 1%;
	text-align: left;
}

.x_qbbt {
	padding: 0px 10px 0px 10px;
	border-bottom: 1px solid #e5eaf0;
	font-size: 14px;
	font-weight: bold;
	color: #242f3d;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	height: 48px;
	line-height: 48px;
}

.x_qblb {
	padding: 10px;
	border-radius: 8px;
	margin-top: 10px;
	overflow: hidden;
}

.x_qblb:hover {
	background: #e6f9ff;
}

.x_qblbt {
	font-size: 14px;
	font-weight: bold;
	color: #242f3d;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.x_qblbt img {
	margin-bottom: -2px;
}

.x_qblbb {
	font-size: 12px;
	color: #505e72;
	line-height: 20px;
	margin-top: 6px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

.x_qblbz {
	font-size: 12px;
	color: #099dfd;
	margin-top: 12px;
	text-decoration: underline;
	float: left;
	margin-right: 10px;
}

.x_qblbz a {
	color: #099dfd;
}

.x_qblbz:hover .gd {
	margin-left: 10px;
	transition: 0.2s all linear;
}

.x_qb2 {
	width: 19%;
	height: auto;
	float: left;
	margin-left: 1%;
	text-align: left;
}

.x_qbbt2 {
	padding: 0px 10px 0px 10px;
	border-bottom: 1px solid #e5eaf0;
	font-size: 14px;
	font-weight: bold;
	color: #242f3d;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	height: 48px;
	line-height: 48px;
}

.x_qblb2 {
	padding: 10px;
	border-radius: 8px;
	margin-top: 10px;
	overflow: hidden;
}

.x_qblb2:hover {
	background: #e6f9ff;
}

.hezi {
	max-width: 1200px;
	height: auto;
	background: #f8f9fa;
}

.btnnav {
	position: relative;
	width: 200px;
	height: auto;
	float: left;
	background: #f8f9fa;
	padding-top: 20px;
	min-height: 386px;
}

.btn {
	width: 200px;
	height: auto;
	overflow: hidden;
}

.btn li {
	width: 200px;
	height: 40px;
	line-height: 40px;
	float: left;
	text-align: left;
	color: #242f3d;
}

.box {
	height: auto;
	overflow: auto;
	min-height: 386px;
	max-height: 420px;
	padding-bottom: 10px;
	padding-top: 10px;
	background: #ffffff;
	position: relative;
	margin-left: 200px;
}

.con {
	height: auto;
}

.con li {
	width: 100%;
	height: auto;
	float: left;
	display: none;
}

.con .current {
	display: block;
}

.zcwz {
	float: left;
	width: 191px;
	height: 38px;
	line-height: 38px;
	padding-left: 15px;
	margin-top: 2px;
	border-radius: 8px 0px 0px 8px;
	position: relative;
}

.hot1 {
	display: inline-block;
	height: 24px;
	width: 17px;
	background: url(https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/fire1.svg)
		0 0 no-repeat;
	background-size: 100% 100%;
	vertical-align: middle;
	margin-left: 5px;
}

.zctb {
	float: left;
	width: 9px;
	height: 42px;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/dhxz.svg")
		no-repeat left top;
	display: none;
}

.sale {
	width: 36px;
	height: 15px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/sale.svg")
		center top no-repeat;
	background-size: 36px 15px;
	margin-left: 8px;
	margin-top: 2px;
}

.hot {
	width: 32px;
	height: 15px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/hot.svg")
		center top no-repeat;
	background-size: 32px 15px;
	margin-left: 8px;
	margin-top: 2px;
}

.NEW {
	width: 32px;
	height: 15px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/NEW.svg")
		center top no-repeat;
	background-size: 32px 15px;
	margin-left: 8px;
	margin-top: 2px;
}

.update {
	width: 32px;
	height: 15px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/shengji.svg")
		center top no-repeat;
	background-size: 32px 15px;
	margin-left: 8px;
	margin-top: 2px;
}

.templateComp-default-style {
	margin-bottom: 54px !important;
}

.zhuanquan {
	width: 100%;
	height: 640px;
	float: left;
	position: absolute;
	display: none;
}

.square {
	position: relative;
	filter: blur(60px);
	width: 600px;
	height: 360px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 200px;
	float: right;
	transform-origin: left top;
	overflow: hidden;
}

/* Span 1 */
.square span:nth-child(1) {
	position: absolute;
	top: 0;
	left: 300px;
	width: 100%;
	height: 100%;
	border: 2px solid #fff;
	border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
	transition: 0.5s;
	animation: animate 3s linear infinite;
	background: #9fe9f5;
	border: none;
}

/* Span 2 */
.square span:nth-child(2) {
	position: absolute;
	top: 0;
	left: -150px;
	width: 100%;
	height: 100%;
	border: 2px solid #fff;
	border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
	transition: 0.5s;
	animation: animate 5s linear infinite;
	background: #ffa166;
	border: none;
}

/* Span 3 */
.square span:nth-child(3) {
	position: absolute;
	top: -50px;
	left: 200px;
	width: 100%;
	height: 100%;
	border: 2px solid #fff;
	border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
	transition: 0.5s;
	animation: animate2 5s linear infinite;
	background: #8a84ca;
	border: none;
}

/* Span 4 */
.square span:nth-child(4) {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: 2px solid #fff;
	border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
	transition: 0.5s;
	animation: animate2 4s linear infinite;
	background: #d851a6;
	border: none;
}

@keyframes animate {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@keyframes animate2 {
	0% {
		transform: rotate(360deg);
	}

	100% {
		transform: rotate(0deg);
	}
}

.bannerList {
	text-align: left;
	box-sizing: border-box;
	padding: 30px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
}

.bannerList a {
	display: inline-block;
}

.bannerList img {
	width: 260px;
	height: 124px;
	border-radius: 8px;
	margin-bottom: 40px;
	transition: all 0.3s;
	cursor: pointer;
}

.bannerList img:hover {
	transform: translateY(-10px);
}

.box li {
	height: 410px;
}

@media screen and (max-width: 1050px) {
	.xtopz > div {
		padding: 0px 10px 0px 10px;
	}
}

@media screen and (max-width: 1200px) {
	.bannerList img {
		margin-bottom: 20px;
	}
}

/* 20241029 */
.x_tyg {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_tyg.svg")
		center 8px no-repeat;
	background-size: 24px 24px;
}

.x_demo {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/agora_demo.svg")
		center 8px no-repeat;
	background-size: 24px 24px;
}

.xdnrsthz2 {
	width: 206px;
	padding: 12px;
	height: auto;
	background: #ffffff;
	z-index: 3;
	margin-left: 430px;
	overflow: hidden;
	display: none;
	border-radius: 0px 0px 8px 8px;
}

/* 20241107 */
.x_status {
	width: 50px;
	height: 50px;
	float: left;
	background: url("https://www.shengwang.cn/_cache_fdd9/_compdelivery/WEB-Nav/assets/images/status.svg")
		center 0px no-repeat;
	background-size: 24px 24px;
}
</style>
