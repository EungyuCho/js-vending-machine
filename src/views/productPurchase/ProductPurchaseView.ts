import ProductPurchaseController from '../../controller/productPurchase/ProductPurchaseController'
import { $Root } from '../../routes/router'
import MoneyStore from '../../store/MoneyStore'
import ProductStore from '../../store/ProductStore'
import {
  PRODUCT_PURCHASE_RETURN_COIN_INVENTORY,
  PRODUCT_PURCHASE_PRODUCT_INPUT_CONTAINER,
  PRODUCT_PURCHASE_CHARGE_INPUT,
  PRODUCT_PURCHASE_CHARGE_BUTTON,
  PRODUCT_PURCHASE_CHARGE_AMOUNT,
  PRODUCT_PURCHASE_COIN_RETURN_BUTTON,
} from '../../utils/constants/element'
import { $ } from '../../utils/dom/selector'

const ProductPurchaseTemplate = `
  <div class="purchase-container">
    <h3>충전하기</h3>
    <div class="vending-machine-wrapper">
      <input type="number" name="charge-amount" id="charge-input" data-cy="charge-input" />
      <button id="charge-button" data-cy="charge-button">충전하기</button>
    </div>
    <p>충전 금액: <span id="charge-amount" data-cy="charge-amount">0</span>원</p>
    </div>

    <h3>구매할 수 있는 상품 현황</h3>
    <table class="product-inventory margin-auto">
      <colgroup>
        <col style="width: 140px" />
        <col style="width: 100px" />
        <col style="width: 100px" />
        <col style="width: 100px" />
      </colgroup>
      <thead><tr><th>상품명</th><th>가격</th><th>수량</th><th>구매</th></tr></thead>
      <tbody id="product-items-container" data-cy="product-items-container"></tbody>
    </table>
    
  <h3>잔돈</h3>
  <button id="coin-return-button" data-cy"coin-return-button">반환하기</button>
  <table class="cashbox-change">
    <colgroup>
      <col />
      <col />
    </colgroup>
    <thead>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
    </thead>
    <tbody data-cy="return-coin-inventory">
      <tr>
        <td>500원</td>
        <td id="coin-500-quantity"></td>
      </tr>
      <tr>
        <td>100원</td>
        <td id="coin-100-quantity"></td>
      </tr>
      <tr>
        <td>50원</td>
        <td id="coin-50-quantity"></td>
      </tr>
      <tr>
        <td>10원</td>
        <td id="coin-10-quantity"></td>
      </tr>
    </tbody>
  </table>
`

export default class ProductPurchaseView {
  controller: ProductPurchaseController
  $template: DocumentFragment

  $chargeInput: HTMLInputElement
  $chargeButton: HTMLButtonElement
  $chargeAmount: HTMLSpanElement
  $productInputContainer: HTMLTableSectionElement
  $returnCoinButton: HTMLButtonElement
  $coinInventory: HTMLTableSectionElement

  #productStore: ProductStore
  #moneyStore: MoneyStore

  constructor(productStore: ProductStore, moneyStore: MoneyStore) {
    this.controller = new ProductPurchaseController(productStore, moneyStore)
    this.#productStore = productStore
    this.#moneyStore = moneyStore
  }

  renderProductList() {
    const products = this.#productStore.getProducts()

    if (!this.$productInputContainer || !products.length) {
      return
    }

    this.$productInputContainer.innerHTML = ''
    this.$productInputContainer.addEventListener('click', (event) => {
      const target = event.target

      if (!target) {
        return
      }
      if (target instanceof HTMLButtonElement) {
        this.controller.dispatch({
          type: 'PURCHASE_PRODUCT',
          payload: { name: target.dataset.product ?? '' },
        })
      }
    })

    products.forEach(({ name, price, quantity }) => {
      const row = this.$productInputContainer.insertRow(0)
      const nameCell = row.insertCell(0)
      const priceCell = row.insertCell(1)
      const quantityCell = row.insertCell(2)
      const purchaseCell = row.insertCell(3)

      nameCell.textContent = name
      priceCell.textContent = price.toLocaleString()
      quantityCell.textContent = quantity.toLocaleString()
      purchaseCell.innerHTML = `<button data-product="${name}">구매하기</button>`
    })
  }

  // getProduct(): { product?: ProductProps; errorMessage?: string } {
  //   const name = this.$productNameInput.value
  //   const price = Number(this.$productPriceInput.value)
  //   const quantity = Number(this.$productQuantityInput.value)

  //   if (
  //     this.$productNameInput.value === '' ||
  //     this.$productQuantityInput.value === '' ||
  //     this.$productQuantityInput.value === ''
  //   ) {
  //     return { errorMessage: PRODUCT_ADD_INPUT_INVALID }
  //   }

  //   if (quantity < 1) {
  //     return { errorMessage: PRODUCT_ADD_QUANTITY_INVALID }
  //   }

  //   if (!this.#store.isPriceValid(price)) {
  //     return { errorMessage: PRODUCT_ADD_PRICE_INVALID }
  //   }

  //   return { product: { name, price, quantity } }
  // }

  render() {
    const $template = this.createTemplate()
    $Root.replaceChildren($template)
    this.selectDomElement()
    this.bindEvent()
    this.renderProductList()
  }

  bindEvent() {
    // this.onProductAddButtonClick()
  }

  createTemplate() {
    const $template = document
      .createRange()
      .createContextualFragment(ProductPurchaseTemplate)

    return $template
  }

  selectDomElement() {
    this.$chargeInput = $({
      selector: PRODUCT_PURCHASE_CHARGE_INPUT,
      target: this.$template,
    }) as HTMLInputElement

    this.$chargeButton = $({
      selector: PRODUCT_PURCHASE_CHARGE_BUTTON,
      target: this.$template,
    }) as HTMLButtonElement

    this.$chargeAmount = $({
      selector: PRODUCT_PURCHASE_CHARGE_AMOUNT,
      target: this.$template,
    }) as HTMLSpanElement

    this.$productInputContainer = $({
      selector: PRODUCT_PURCHASE_PRODUCT_INPUT_CONTAINER,
      target: this.$template,
    }) as HTMLTableSectionElement

    this.$returnCoinButton = $({
      selector: PRODUCT_PURCHASE_COIN_RETURN_BUTTON,
      target: this.$template,
    }) as HTMLButtonElement

    this.$coinInventory = $({
      selector: PRODUCT_PURCHASE_RETURN_COIN_INVENTORY,
      target: this.$template,
    }) as HTMLTableSectionElement
  }
}
