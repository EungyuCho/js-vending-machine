import { Router } from './routes/router';
import ProductStore from './store/ProductStore';
import ProductManageView from './views/productManage/ProductManageView';
var productStore = new ProductStore();
var productManageView = new ProductManageView(productStore);
new Router({
  productManageView: productManageView
});

if (module.hot) {
  module.hot.accept();
}