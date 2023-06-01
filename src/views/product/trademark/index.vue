<template>
  <el-card class="box-card">
    <!-- 卡片顶部添加品牌按钮 -->
    <el-button type="primary" size="default" icon="Plus" @click="addTrademark">添加品牌</el-button>
    <el-table style="margin: 10px 0px" border :data="trademarkArr" class="trademark-table">
      <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
      <!-- table-column:默认展示数据用div -->
      <el-table-column label="品牌名称" prop="tmName"> </el-table-column>
      <el-table-column label="品牌LOGO">
        <template #="{ row, $index }">
          <img :src="row.logoUrl" style="width: 100px; height: 100px" />
        </template>
      </el-table-column>
      <el-table-column label="品牌操作">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="Edit" @click="updateTrademark(row)"></el-button>
          <el-popconfirm :title="`您确定要删除${row.tmName}?`" width="250px" icon="Edit" @confirm="removeTradeMark(row.id)">
            <template #reference>
              <el-button type="primary" size="small" icon="Delete"></el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination @size-change="sizeChange" @current-change="changePageNo" :pager-count="9" v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[2, 4, 6, 8]" background layout="prev, pager, next, jumper,->,sizes,total" class="paginationme" :total="total" />
  </el-card>
  <el-dialog v-model="dialogFormVisible" :title="trademarkParams.id ? '修改品牌' : '添加品牌'">
    <el-form style="width: 80%" :model="trademarkParams" ref="formRef">
      <el-form-item label="品牌名称" label-width="100px" prop="tmName">
        <el-input placeholder="请您输入品牌名称" v-model="trademarkParams.tmName"></el-input>
      </el-form-item>
      <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
        <!-- upload组件属性:action图片上传的接口地址 -->
        <el-upload class="avatar-uploader" action="http://sph-api.atguigu.cn/admin/product/fileUpload" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <!-- 具名插槽:footer -->
    <template #footer>
      <el-button type="primary" size="default" @click="cancel">取消</el-button>
      <el-button type="primary" size="default" @click="confirm">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue'
import { ElMessage, UploadProps } from 'element-plus'
import { reqHasTrademark, reqAddOrUpdateTrademark, reqDeleteTrademark } from '@/api/product/trademark'
//控制对话框显示与隐藏
let dialogFormVisible = ref<boolean>(false)
let trademarkParams = reactive({
  tmName: '',
  logoUrl: ''
})
//点击添加品牌触发
const addTrademark = () => {
  //对话框显示
  dialogFormVisible.value = true
  //清空收集数据
  trademarkParams.id = 0
  trademarkParams.tmName = ''
  trademarkParams.logoUrl = ''
}
const cancel = () => {
  dialogFormVisible.value = false
}
//在弹出的对话框中点击了确认按钮，是增加或者修改
const confirm = async () => {
  dialogFormVisible.value = false
  await reqAddOrUpdateTrademark(trademarkParams)
  //添加品牌或者修改品牌信息都调用同一个函数传入表单绑定的数据项，内部会根据传入的表单数据判断是请求哪个接口
  let result: any = await reqAddOrUpdateTrademark(trademarkParams)
  //添加|修改已有品牌
  if (result.code == 200) {
    //关闭对话框
    dialogFormVisible.value = false
    //弹出提示信息
    ElMessage({
      type: 'success',
      message: trademarkParams.id ? '修改品牌成功' : '添加品牌成功'
    })
    //再次发请求获取已有全部的品牌数据
    getTrademarkData()
  } else {
    //添加品牌失败
    ElMessage({
      type: 'error',
      message: trademarkParams.id ? '修改品牌失败' : '添加品牌失败'
    })
    //关闭对话框
    dialogFormVisible.value = false
  }
}
let trademarkArr: any = ref([])

const updateTrademark = (row: any) => {
  //对话框显示
  dialogFormVisible.value = true
  //将已有的从服务器获得的点击那一项的数据合并到弹出框表单绑定的数据trademarkParams中
  Object.assign(trademarkParams, row)
}
//删除品牌
const removeTradeMark = async (id: number) => {
  console.log('点击了确认删除')
  let result = await reqDeleteTrademark(id)
  if (result.code == 200) {
    //删除成功提示信息
    ElMessage({
      type: 'success',
      message: '删除品牌成功'
    })
    //再次获取已有的品牌数据
    getTrademarkData()
  } else {
    ElMessage({
      type: 'error',
      message: '删除品牌失败'
    })
  }
}
const getTrademarkData = async () => {
  //当前页码
  // pageNo.value = pager;
  let result = await reqHasTrademark(pageNo.value, limit.value)
  if (result.code == 200) {
    //存储已有品牌总个数
    // total.value = result.data.total;
    trademarkArr.value = result.data.records
  }
}
//上传前触发，返回true放行上传图片
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile: any) => {
  //钩子是在图片上传成功之前触发,上传文件之前可以约束文件类型与大小
  //要求:上传文件格式png|jpg|gif 4M
  if (rawFile.type == 'image/png' || rawFile.type == 'image/jpeg' || rawFile.type == 'image/gif') {
    // if (rawFile.size / 1024 / 1024 < 4) {
    //     return true;
    // } else {
    //     ElMessage({
    //         type: 'error',
    //         message: '上传文件大小小于4M'
    //     })
    //     return false;
    // }

    return true
    //返回true即表示向服务器提交图片等待返回新的图片地址
  } else {
    ElMessage({
      type: 'error',
      message: '上传文件格式务必PNG|JPG|GIF'
    })
    return false
  }
}
//图片上传成功钩子
const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  //response:即为当前这次上传图片post请求服务器返回的数据
  //收集上传图片的地址,添加一个新的品牌的时候带给服务器
  trademarkParams.logoUrl = response.data
  console.log(response.data)

  //图片上传成功,清除掉对应图片校验结果
  // formRef.value.clearValidate('logoUrl')
}
onMounted(() => {
  getTrademarkData()
})
//当前页码
let pageNo = ref<number>(1)
//每一页展示多少条数据
let limit = ref<number>(4)
//存储已有品牌数据总数
let total = ref<number>(1000)
const sizeChange = () => {
  console.log('每页展示条数变化发起请求')
  getTrademarkData()
}
const changePageNo = () => {
  //当前页码发生变化的时候再次发请求获取对应已有品牌数据展示
  // getHasTrademark();
  console.log('页码变化发起请求')

  getTrademarkData()
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.el-card {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.el-table {
  height: 300px;
  overflow: auto;
}
</style>
