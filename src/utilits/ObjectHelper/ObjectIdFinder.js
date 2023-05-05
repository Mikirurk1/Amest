

export const updateObjectInArray = (items,itemId,newObjProps)=>{
   return items.map(item => {
    
        if (item.id === itemId) {
            return { ...item, ...newObjProps }
        }
        return item
    })
}