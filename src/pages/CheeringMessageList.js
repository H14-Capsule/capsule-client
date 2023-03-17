const CheeringMessageList = () => {
  return (
    <div className="CheeringMessageList">
      <h2>응원글 리스트</h2>
      <div>

      </div>
    </div>
  )
}
CheeringMessageList.defaultProps = {
  CheeringMessageList: []
  //App.js에서 CheeringMessageList를 받아올때 혹시나 undefined로 전달될 경우 에러가 뜨는걸 대비해서 빈배열을 넣어준다. 
}

export default CheeringMessageList