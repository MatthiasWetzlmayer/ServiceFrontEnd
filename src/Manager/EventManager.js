
export class EventManager{
    events=new Map()


    on=function(key, name, event){
        if(typeof(this.events[key])!='undefined'){
            this.events[key].push({
                event: event,
                name: name
            })
        }else{
            var list=[{
                event: event,
                name: name
            }]
            this.events[key]=list;
        }
        console.log(this.events)
    }

    notify=function(key, data){
        this.events[key].forEach(element => {
            element.event(data)
        });
    }

    off=function(key, name) {
        this.events[key]=this.events[key]
        .filter(x=>(x.name!=name)
        )
        console.log(this.events)
    }
}
export default EventManager
