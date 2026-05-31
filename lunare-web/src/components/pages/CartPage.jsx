import { useMemo, useState } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import pearlVeilFront from '../../assets/images/sub/pearl-veil-main-front_rbg.png'
import lilacGlowFront from '../../assets/images/sub/lilac-glow-front_rbg.png'
import blueHazeFront from '../../assets/images/sub/blue-haze-front_rbg.png'

const initialItems = [
  {
    id: 'pearl-veil',
    name: 'Pearl Veil',
    nameKo: '펄 베일',
    type: 'Balm Highlighter',
    shade: '01 Pearl',
    price: 29000,
    quantity: 1,
    image: pearlVeilFront,
    imageClass: 'scale-[1.12]',
  },
  {
    id: 'lilac-glow',
    name: 'Lilac Glow',
    nameKo: '라일락 글로우',
    type: 'Light Base',
    shade: '01 Lilac',
    price: 32000,
    quantity: 2,
    image: lilacGlowFront,
  },
  {
    id: 'blue-haze',
    name: 'Blue Haze',
    nameKo: '블루 헤이즈',
    type: 'Clear Highlighter',
    shade: '01 Haze',
    price: 29000,
    quantity: 1,
    image: blueHazeFront,
  },
]

const formatPrice = (value) => `${value.toLocaleString('ko-KR')}원`

function QuantityControl({ value, onDecrease, onIncrease }) {
  return (
    <div className="grid h-9 w-[104px] grid-cols-3 overflow-hidden rounded-[5px] border border-[#ded8e5] bg-white/60">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="flex items-center justify-center text-[#6d6676] transition-colors hover:bg-[#f4f0f8]"
        onClick={onDecrease}
      >
        <span className="h-px w-2.5 bg-current" />
      </button>
      <span className="flex items-center justify-center font-pretendard text-[11px] font-light text-[#2d2832]">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="relative flex items-center justify-center text-[#6d6676] transition-colors hover:bg-[#f4f0f8]"
        onClick={onIncrease}
      >
        <span className="absolute h-px w-2.5 bg-current" />
        <span className="absolute h-2.5 w-px bg-current" />
      </button>
    </div>
  )
}

function CartItem({ item, onDecrease, onIncrease, onRemove }) {
  return (
    <article className="grid gap-5 border-t border-[#ded8e5] py-6 md:grid-cols-[132px_1fr_auto] md:items-center md:gap-8">
      <a
        href={`#/product/${item.id}`}
        className="flex h-[132px] w-full max-w-[350px] items-center justify-center rounded-[5px] bg-[#f7f4f8] md:w-[132px]"
      >
        <img
          src={item.image}
          alt={item.name}
          className={`max-h-[76%] max-w-[62%] object-contain drop-shadow-[0_14px_20px_rgba(80,72,96,0.10)] ${item.imageClass ?? ''}`}
        />
      </a>

      <div className="min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <a
              href={`#/product/${item.id}`}
              className="font-didot text-[24px] font-normal leading-none text-[#2a2630] transition-opacity hover:opacity-60"
            >
              {item.name}
            </a>
            <p className="mt-2 font-pretendard text-[11px] font-light text-[#8d8596]">{item.nameKo}</p>
          </div>
          <p className="font-pretendard text-[13px] font-medium text-[#2a2630] md:hidden">
            {formatPrice(item.price * item.quantity)}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 font-pretendard text-[11px] font-light text-[#6d6676]">
          <p className="inline-flex items-center gap-2 rounded-[5px] bg-[#f7f4f8] px-3 py-2">
            <span className="text-[9px] uppercase tracking-[0.14em] text-[#aaa3b1]">Type</span>
            <span>{item.type}</span>
          </p>
          <p className="inline-flex items-center gap-2 rounded-[5px] bg-[#f7f4f8] px-3 py-2">
            <span className="text-[9px] uppercase tracking-[0.14em] text-[#aaa3b1]">Shade</span>
            <span>{item.shade}</span>
          </p>
        </div>

        <div className="mt-5 flex items-center gap-5">
          <QuantityControl value={item.quantity} onDecrease={onDecrease} onIncrease={onIncrease} />
          <button
            type="button"
            className="rounded-[5px] border border-[#ded8e5] px-4 py-2 font-pretendard text-[10px] font-light tracking-[0.08em] text-[#6d6676] transition-colors hover:border-[#9a93a5] hover:text-[#2a2630]"
            onClick={onRemove}
          >
            삭제
          </button>
        </div>
      </div>

      <div className="hidden min-w-[88px] text-right md:block">
        <p className="font-pretendard text-[13px] font-medium text-[#2a2630]">
          {formatPrice(item.price * item.quantity)}
        </p>
        <p className="mt-2 font-pretendard text-[10px] font-light text-[#aaa3b1]">
          개당 {formatPrice(item.price)}
        </p>
      </div>
    </article>
  )
}

function EmptyCart() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-260px)] max-w-[720px] flex-col items-center justify-center px-5 py-24 text-center">
      <p className="mb-4 font-pretendard text-[9px] font-light uppercase tracking-[0.28em] text-[#9a93a5]">
        Your bag is empty
      </p>
      <h1 className="font-didot text-[36px] font-normal leading-[1.08] text-[#2a2630] md:text-[48px]">
        Add a little light.
      </h1>
      <p className="mt-5 max-w-[420px] font-pretendard text-[12px] font-light leading-[1.8] text-[#6d6676]">
        깨끗한 피부 결 위에 조용히 머무는 하이라이터를 둘러보세요.
      </p>
      <a
        href="#/shop/all"
        className="mt-9 inline-flex h-[46px] items-center justify-center rounded-[5px] bg-[#2a2630] px-9 font-pretendard text-[10px] font-medium uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-80"
      >
        Shop collection
      </a>
    </section>
  )
}

function CartPage() {
  const [items, setItems] = useState(initialItems)
  const [giftWrap, setGiftWrap] = useState(false)

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  )
  const giftWrapFee = giftWrap ? 3000 : 0
  const total = subtotal + giftWrapFee

  const updateQuantity = (id, direction) => {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id !== id) return item
        const nextQuantity = direction === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1)
        return { ...item, quantity: nextQuantity }
      })
    )
  }

  const removeItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#fbfafc] text-[#211f24]">
      <Header tone="light" />

      <main className="overflow-x-hidden">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <section className="bg-[#f7f4f8] pt-[var(--header-h)]">
              <div className="mx-auto grid max-w-[1280px] gap-5 px-6 pb-9 pt-9 md:px-12 md:pb-11 md:pt-10 xl:px-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
                <div>
                  <p className="mb-3 font-pretendard text-[9px] font-light uppercase tracking-[0.28em] text-[#8f8799]">
                    Shopping Bag
                  </p>
                  <h1 className="max-w-[340px] font-didot text-[32px] font-normal leading-[1.08] text-[#2c2731] md:max-w-none md:text-[46px]">
                    A quiet edit of glow.
                  </h1>
                </div>
                <p className="max-w-[360px] font-pretendard text-[12px] font-light leading-[1.8] text-[#6d6676] lg:justify-self-end">
                  장바구니에 담긴 빛을 확인하고, 필요한 수량과 옵션을 정돈해 주세요.
                </p>
              </div>
            </section>

            <section className="mx-auto grid max-w-[1280px] gap-12 px-6 pb-24 pt-10 md:px-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14 xl:px-16">
              <div>
                <div className="mb-2 flex items-center justify-between gap-6 font-pretendard text-[10px] font-light uppercase tracking-[0.16em] text-[#aaa3b1]">
                  <span>{items.length} Items</span>
                  <a href="#/shop/all" className="transition-colors hover:text-[#2a2630]">
                    <span className="sm:hidden">Shop</span>
                    <span className="hidden sm:inline">Continue shopping</span>
                  </a>
                </div>

                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onDecrease={() => updateQuantity(item.id, 'decrease')}
                    onIncrease={() => updateQuantity(item.id, 'increase')}
                    onRemove={() => removeItem(item.id)}
                  />
                ))}
              </div>

              <aside className="lg:sticky lg:top-[calc(var(--header-h)+28px)] lg:self-start">
                <div className="rounded-[6px] border border-[#ded8e5] bg-white/62 px-5 py-6 md:px-6">
                  <h2 className="font-didot text-[28px] font-normal leading-none text-[#2a2630]">
                    Order summary
                  </h2>

                  <div className="mt-6 border-t border-[#ded8e5] font-pretendard text-[12px] font-light text-[#5f5866]">
                    <p className="flex justify-between border-b border-[#e8e2ec] py-4">
                      <span>상품 금액</span>
                      <span>{formatPrice(subtotal)}</span>
                    </p>
                    <p className="flex justify-between border-b border-[#e8e2ec] py-4">
                      <span>선물 포장</span>
                      <span>{giftWrap ? formatPrice(giftWrapFee) : '0원'}</span>
                    </p>
                  </div>

                  <label className="mt-5 flex cursor-pointer items-center justify-between gap-4 border-y border-[#ded8e5] py-4 font-pretendard text-[11px] font-light text-[#5f5866]">
                    <span>
                      선물 포장 추가
                      <span className="mt-1 block text-[10px] text-[#aaa3b1]">Soft pearl pouch · 3,000원</span>
                    </span>
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(event) => setGiftWrap(event.target.checked)}
                      className="h-4 w-4 accent-[#2a2630]"
                    />
                  </label>

                  <div className="mt-5">
                    <label
                      htmlFor="cart-note"
                      className="mb-2 block font-pretendard text-[10px] font-light uppercase tracking-[0.16em] text-[#aaa3b1]"
                    >
                      Delivery note
                    </label>
                    <textarea
                      id="cart-note"
                      rows="3"
                      className="w-full resize-none rounded-[5px] border border-[#ded8e5] bg-[#fbfafc] px-3 py-3 font-pretendard text-[11px] font-light leading-[1.6] text-[#3a3540] outline-none transition-colors placeholder:text-[#b9b2c1] focus:border-[#9a93a5]"
                      placeholder="문 앞에 조용히 놓아주세요."
                    />
                  </div>

                  <div className="mt-6 flex items-end justify-between">
                    <span className="font-pretendard text-[11px] font-light uppercase tracking-[0.16em] text-[#8d8596]">
                      총 결제 금액
                    </span>
                    <span className="font-didot text-[32px] font-normal leading-none text-[#2a2630]">
                      {formatPrice(total)}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="mt-6 h-[48px] w-full rounded-[5px] bg-[#29252d] font-pretendard text-[10px] font-medium uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-82"
                  >
                    Checkout
                  </button>

                  <p className="mt-4 text-center font-pretendard text-[10px] font-light leading-[1.7] text-[#aaa3b1]">
                    안전 결제 · 모든 주문에 샘플 증정
                  </p>
                </div>
              </aside>
            </section>
          </>
        )}
      </main>

      <Footer compact />
    </div>
  )
}

export default CartPage
