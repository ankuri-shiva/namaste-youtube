import Button from "./Button"


const buttonsList = ["All", "Live", "News", "Music", "Games", "Cricket", "Soccer", "New", "React", "JavaSecript", "Cinema", "Comedy",]
//["BollyWood", "English", "MoneyControl", "Stocks", "Favourite"]

const ButtonsList = () => {
  return (
    <div className="flex flex-shrink-0  overflow-x-auto whitespace-nowrap">
      {buttonsList.map((each, index) => (
        <Button key = {index}  name = {each} />
      ))}
    </div>
  )
}

export default ButtonsList