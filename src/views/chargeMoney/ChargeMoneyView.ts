import {
  VENDING_MACHINE_CHARGE_AMOUNT,
  VENDING_MACHINE_CHARGE_BUTTON,
  VENDING_MACHINE_CHARGE_INPUT,
  VENDING_MACHINE_COIN_INVENTORY,
} from '../../constants/chargeMoney/element'
import ChargeMoneyController from '../../controller/chargeMoney/chargeMoneyController'
import MoneyStore from '../../store/MoneyStore'

import { $ } from '../../utils/dom/selector'
import View from '../View'

const ChargeMoneyTemplate = `
  <h3>자판기 돈통 충전하기</h3>
  <div class="vending-machine-wrapper">
    <input type="number" name="vending-machine-charge-amount" id="vending-machine-charge-input" data-cy="vending-machine-charge-input" autofocus />
    <button id="vending-machine-charge-button"  data-cy="vending-machine-charge-button">충전하기</button>
  </div>
  <p>보유 금액: <span id="vending-machine-charge-amount" data-cy="vending-money-inventory">0</span>원</p>
  <h3>동전 보유 현황</h3>
  <table class="cashbox-remaining">
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
    <tbody data-cy="vending-coin-inventory" id="vending-coin-inventory">
      <tr>
        <td>500원</td>
        <td id="vending-machine-coin-500-quantity"></td>
      </tr>
      <tr>
        <td>100원</td>
        <td id="vending-machine-coin-100-quantity"></td>
      </tr>
      <tr>
        <td>50원</td>
        <td id="vending-machine-coin-50-quantity"></td>
      </tr>
      <tr>
        <td>10원</td>
        <td id="vending-machine-coin-10-quantity"></td>
      </tr>
    </tbody>
  </table>
`

export default class ChargeMoneyView extends View {
  viewId: string
  template: string
  controller: ChargeMoneyController
  $template: DocumentFragment
  $addButton: HTMLElement
  $vendingMoneyAddInput: HTMLInputElement
  $inventory: HTMLTableSectionElement
  $coinAmount: HTMLSpanElement

  #store: MoneyStore

  constructor(moneyStore: MoneyStore) {
    super()
    this.viewId = 'vending-machine-manage-menu'
    this.template = ChargeMoneyTemplate
    this.controller = new ChargeMoneyController(moneyStore)
    this.#store = moneyStore
  }

  onMoneyAddButtonClick() {
    this.$addButton.addEventListener('click', () => {
      const isSuccessed = this.controller.dispatch({
        type: 'CHARGE_MONEY',
      })

      this.$vendingMoneyAddInput.value = ''
      this.$vendingMoneyAddInput.focus()

      if (!isSuccessed) {
        return
      }

      this.renderCoin()
    })
  }

  renderCoin() {
    const coin = this.#store.getVendingMoneyCoin()

    this.$inventory.innerHTML = ''
    this.$coinAmount.textContent = this.#store
      .getVendingMoney()
      .toLocaleString()

    Object.keys(coin).forEach((coinKey, index) => {
      const key = coinKey as keyof typeof coin
      const row = this.$inventory.insertRow(index)
      const coinUnit = row.insertCell(0)
      const count = row.insertCell(1)

      coinUnit.textContent = key

      count.textContent = (coin[key] ?? 0) + '개'
    })
  }

  render() {
    super.render()
    this.renderCoin()
  }

  bindEvent() {
    this.onMoneyAddButtonClick()
  }

  selectDomElement() {
    this.$addButton = $({
      selector: VENDING_MACHINE_CHARGE_BUTTON,
      target: this.$template,
    }) as HTMLInputElement
    this.$vendingMoneyAddInput = $({
      selector: VENDING_MACHINE_CHARGE_INPUT,
      target: this.$template,
    }) as HTMLInputElement

    this.$inventory = $({
      selector: VENDING_MACHINE_COIN_INVENTORY,
    }) as HTMLTableSectionElement

    this.$coinAmount = $({
      selector: VENDING_MACHINE_CHARGE_AMOUNT,
    }) as HTMLSpanElement
  }
}
