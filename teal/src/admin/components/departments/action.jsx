import {api} from '../../../constants'


export const getDepartments = async (component) =>{
    try {
      let data = await api.get('/departments').then(({data}) => data);

      if(component.isComponentWillUnMount){
        component.setState({
          data:data,
          loading:false,
        })
      }
    } catch (error) {
      console.log("fail to log department list",error)
      component.setState({loading:false})
    }
 
  }