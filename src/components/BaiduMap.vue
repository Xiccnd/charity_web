<template>
    <div id="mask" v-show="isPay"></div>
    <div id="mapBackground" v-show="isPay">
        <div id="mapBox">
            <div id="mapFont">地图</div>
            <div id="close" v-on:click="isPay = false">x</div>
            <!-- <button id="close">x</button> -->
        </div>
	<div id="map">
		<div id="allmap" ref="allmap">
        </div>
	</div>
    </div>  
</template>
<script>
    // let isPay = true;
	export default {
		name: "BaiduMap",
        data() {
            return{
                isPay:false,
                // mapX:116.404,
                // mapY:39.915,
                // address:'延庆区新城街2号',
                // city:'重庆市'
            }
        },
		methods: {
			map(addres,city) {
				let map = new window.BMap.Map(this.$refs.allmap); // 创建Map实例
				// map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
                // let marker = new window.BMap.Marker(new window.BMap.Point(mapX, mapY));
                // console.log(mapX);
                var myGeo = new window.BMap.Geocoder();
                myGeo.getPoint(addres, function(point){      
                    if (point) {      
                        map.centerAndZoom(point, 16);
                        // map.panBy(342,224);      
                        map.addOverlay(new window.BMap.Marker(point));      
                    }      
                },city);
                // let marker = new window.BMap.Marker(new window.BMap.Point(116.404, 39.915));
				map.addControl(
					new window.BMap.MapTypeControl({
						// 添加地图类型控件
						mapTypes: [window.BMAP_NORMAL_MAP, window.BMAP_HYBRID_MAP],
					})
				);
                // map.addOverlay(marker);
				map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
				map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
			},
			initMapHeight() {
				var main = document.getElementById("map");
				main.style.height = window.innerHeight + "px";
			},
		},
		mounted() {
            console.log(this.address)
		},
	};
</script>
<style>
    #mask {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
    }
    #mapBackground{
        background-color: white;
        height: 500px;
        width: 50%;
        z-index: 10;
        position: fixed;
        top: 15%;
        left: 25%;
    }
    #mapBox {
        height: 5%;
        width: 100%;
        color: #c00;
        font-size: 18px;
    }
    #mapFont{
        margin-left: 10px;
        float: left;
    }
    #close{
        margin-right: 10px;
        color: black;
        float: right;
    }
	#allmap {
		height: 60%;
        width: 90%;
		/* overflow: hidden;
        z-index:998; */
        margin: auto;
	}
</style>

