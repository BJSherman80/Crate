// App Imports
import Detail from '../../modules/product/Detail' 
// There may be some error here - seems not to render

// Product routes
export default {
  product: {
    path: (slug = ':slug') => (`/product/${ slug }`), 
    component: Detail
  }
}
