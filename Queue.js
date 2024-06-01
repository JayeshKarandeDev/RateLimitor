class Queue{
    constructor ()
    {
        this.elements=[]
    }
    enqueue(data){
        this.elements.push(data)
        console.log("adding item in queue")
        return "current queue length "+this.elements.length
    }
    dequeue(){
        if (this.elements.length==0) {
            return null
        }
        console.log("removing item from queue")
        return this.elements.shift()
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
    isEmpty(){
        if (this.elements.length==0) {
            return true
        }
        else return false
    }

}

module.exports=Queue