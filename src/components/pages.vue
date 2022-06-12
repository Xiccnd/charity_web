<template>
  <div   id="cpaginate">
              <div  class="pages" v-if="totalCount">
                <a href="javascript:void(0);" class="u-item" :class="{'disabled': currentPage===1}" @click="changePage(1)">首页</a>
                <a href="javascript:void(0);" class="u-item" :class="{'disabled': currentPage===1}" @click="changePage(currentPage - 1)">上一页</a>
                <span
      class="u-ellipsis"
      ref="forward"
      v-show="forwardMore"
      @click="onForward"
      @mouseenter="onEnterForward"
      @mouseleave="onLeaveForward">&middot;&middot;&middot;</span>
                <a href="javascript:void(0);" :class="['u-item', {'active': currentPage===num}]" v-for="num in pageList" :key="num" @click="changePage(num)">{{ num }}</a>
                <span
      class="u-ellipsis"
      ref="backward"
      v-show="backwardMore"
      @click="onBackward"
      @mouseenter="onEnterBackward"
      @mouseleave="onLeaveBackward">&middot;&middot;&middot;</span>
                <a href="javascript:void(0);" class="u-item" :class="{'disabled': currentPage===totalPage}" @click="changePage(currentPage + 1)">下一页</a>
                <a href="javascript:void(0);" class="u-item" :class="{'disabled': currentPage===totalPage}" @click="changePage(totalPage)">尾页</a>
                <span >第</span>
                <input  type="text" v-model="jumpNumber"/>
                <span >页</span>
                <a href="javascript:void(0);" class="pages-btn u-item" @click="jumpPage(jumpNumber)">跳转</a>
                <span >共{{ totalPage }}页 / {{ totalCount }}条</span>
              </div>
            </div>
</template>

<script>
export default {
data () {
    return {
      currentPage: this.pageNumber, // 当前页码
      currentSize: this.pageSize, // 分页数
      jumpNumber: '', // 跳转的页码
      forwardMore: false, // 左箭头展示
      backwardMore: false // 右箭头展示
    }
  },
  props: {
    pageNumber: { // 当前页面
      type: Number,
      default: 1
    },
    pageSize: { // 每页显示数量 [10条/页 20条/页 30条/页 40条/页]
      type: Number,
      default: 10
    },
    totalCount: { // 总条数
      type: Number,
      default: 0
    },
    pageListNum: { // 显示的页码数组长度
      type: Number,
      default: 5
    }
  },
  computed: {
    totalPage () { // 总页数
      return Math.ceil(this.totalCount / this.currentSize) // 向上取整
    },
    pageList () { // 获取显示的页码数组
      return this.dealPageList(this.currentPage)
    }
  },
  watch: {
    currentPage (to, from) {
      // 通过更改当前页码，修改分页数据
      this.$emit('changePage', { currentPage: to, currentSize: this.currentSize })
    }
  },
  created () {
    // 监听键盘Enter按键
    document.onkeydown = (e) => {
      const ev = e || window.event
      if (ev && ev.keyCode === 13 && this.jumpNumber) {
        this.jumpPage(this.jumpNumber)
      }
    }
  },
  methods: {
    dealPageList (curPage) {
      var resList = []
      var offset = Math.floor(this.pageListNum / 2) // 向下取整
      var pager = {
        start: curPage - offset,
        end: curPage + offset
      }
      if (pager.start < 1) {
        pager.end = pager.end + (1 - pager.start)
        pager.start = 1
      }
      if (pager.end > this.totalPage) {
        pager.start = pager.start - (pager.end - this.totalPage)
        pager.end = this.totalPage
      }
      if (pager.start < 1) {
        pager.start = 1
      }
      if (pager.start > 1) {
        this.forwardMore = true
      } else {
        this.forwardMore = false
      }
      if (pager.end < this.totalPage) {
        this.backwardMore = true
      } else {
        this.backwardMore = false
      }
      // 生成要显示的页码数组
      for (let i = pager.start; i <= pager.end; i++) {
        resList.push(i)
      }
      return resList
    },
    onEnterForward () {
      this.$refs.forward.innerHTML = '&laquo;'
    },
    onLeaveForward () {
      this.$refs.forward.innerHTML = '&middot;&middot;&middot;'
    },
    onEnterBackward () {
      this.$refs.backward.innerHTML = '&raquo;'
    },
    onLeaveBackward () {
      this.$refs.backward.innerHTML = '&middot;&middot;&middot;'
    },
    onForward () {
      this.currentPage = this.currentPage - this.pageListNum > 0 ? this.currentPage - this.pageListNum : 1
    },
    onBackward () {
      this.currentPage = this.currentPage + this.pageListNum < this.totalPage ? this.currentPage + this.pageListNum : this.totalPage
    },
    jumpPage (jumpNum) {
      if (Number(jumpNum)) {
        if (Number(jumpNum) < 1) {
          jumpNum = 1
        }
        if (Number(jumpNum) > this.totalPage) {
          jumpNum = this.totalPage
        }
        this.changePage(Number(jumpNum))
      }
      this.jumpNumber = '' // 清空跳转输入框
    },
    changePage (pageNum) {
      if (this.currentPage !== pageNum) { // 点击的页码不是当前页码
        this.currentPage = pageNum
      }
    },
    getListdate(){
       this.$http({
                  method:"get",
                  url:"/volunteerProgramDetails/selectAll"
               })
              .then(res => {
                this.pageNumber=res.data
                this.pageNumber, // 当前页码
                this.pageSize, // 分页数
                this.jumpNumber=1, // 跳转的页码
                this.backwardMore=true
              })
              .catch(err => {
                console.error(err); 
              })
    }
  }
}
</script>

<style scoped>
.u-item{
    user-select: none;
}
.u-ellipsis {
    display: inline-block;
    width: 12px;
    padding: 0 8px;
    margin-right: 5px;
    cursor: pointer;
  }
.u-ellipsis:hover{
      color: #D93844;
}
.pages {
    padding: 20px 0;
    text-align: center;
    font-size: 0;
}
.pages .pages-btn, .pages input {
    border-radius: 4px;
}
.pages .pages-btn {
    white-space: nowrap;
    width: 48px;
    border-radius: 24px;
}
.disabled{
    display: none!important;
}
.pages a {
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 22px;
    font-size: 12px;
    color: #999;
    vertical-align: middle;
    margin: 0 5px;
    transition: 0.3s;
}
.pages input:focus {
    border-color: #cc0000;
}
.pages a:hover, .pages .pages-btn:last-child {
    border-color: #cc0000;
    color: #cc0000;
}
.pages a.active, .pages .pages-btn:last-child:hover {
    border-color: #cc0000;
    background: #cc0000;
    color: #fff;
}
.pages span {
    font-size: 12px;
    color: #333;
    margin: 0 5px;
    vertical-align: middle;
}
</style>