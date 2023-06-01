export const gettime=()=>{

  const date=new Date()
  const hour= date.getHours()
  if(hour>0&&hour<10){
    return '上午'
  }
  else if(hour>=10&& hour<13){
   return '中午'
  }
  else if(hour>=13&& hour<18){
    return '下午'
  }
  else{
    return '晚上'
  }
}