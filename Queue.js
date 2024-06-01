class Queue{
    maxQueue=5
    constructor ()
    {
        this.elements=[]
    }
    enqueue(data){
        if (this.elements.length==this.maxQueue) {
            return "Queue already full"
        }
        this.elements.push(data)
        return "current queue length "+this.elements.length
    }
    dequeue(){
        if (this.elements.length==0) {
            return null
        }
        return this.elements.shift()
        return "current queue length "+this.elements.length
    }
    size()
    {
        return this.elements.length
    }
    peek(){
        if (this.elements.length==0) {
            return null
        }
        return this.elements[0]
    }

}

module.exports=Queue