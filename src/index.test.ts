import { describe, expect, it, vi } from 'vitest'
import { isWebview } from './index'

const samples = {
  positive: [
    // => iOS
    // SnapChat
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Snapchat/12.02.0.31 (like Safari/8613.3.9.0.5)',
    // TikTok
    'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 musical_ly_25.9.0 JsSdk/2.0 NetType/WIFI Channel/App Store ByteLocale/en Region/CA RevealType/Dialog isDarkMode/0 WKWebView/1 BytedanceWebview/d8a21c6 FalconTag/9BBBCC25-B655-47F2-9B89-6E9CDB33DF77',
    // Instagram
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 254.0.0.15.109 (iPhone11,8; iOS 15_6_1; en_CA; en-CA; scale=2.00; 828x1792; 401726258)',
    // Facebook
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/19G82 [FBAN/FBIOS;FBDV/iPhone14,2;FBMD/iPhone;FBSN/iOS;FBSV/15.6.1;FBSS/3;FBID/phone;FBLC/nl_NL;FBOP/5]',

    // => Android
    // SnapChat
    'Mozilla/5.0 (Linux; Android 12; SM-G990W Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/105.0.5195.136 Mobile Safari/537.36Snapchat12.01.0.33 (SM-G990W; Android 12#G990WVLU3CVG1#31; gzip; )',
    // TikTok
    'Mozilla/5.0 (Linux; Android 9; CPH1931; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.62 Mobile Safari/537.36 trill_2021505060 JsSdk/1.0 NetType/WIFI Channel/googleplay AppName/musical_ly app_version/15.5.6 ByteLocale/de ByteFullLocale/de Region/DE AppSkin/white',
    // Instagram
    'Mozilla/5.0 (Linux; Android 9; H8276 Build/52.0.A.11.32; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/105.0.5195.136 Mobile Safari/537.36 Instagram 253.0.0.23.114 Android (28/9; 480dpi; 1080x2016; Sony; H8276; H8276; qcom; en_CA; 399993162)',
    // Facebook
    'Mozilla/5.0 (Linux; Android 11; SM-A037F Build/RP1A.200720.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/105.0.5195.136 Mobile Safari/537.36[FBAN/EMA;FBLC/en_US;FBAV/321.0.0.13.113;]',
  ],
  negative: [
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (Linux; Android 12; SM-N975U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Mobile Safari/537.36',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 15_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/105.0.5195.147 Mobile/15E148 Safari/604.1',
  ]
}

describe('test suite', () => {
  it('is a function type', () => {
    expect(isWebview).toBeTypeOf('function')
  })

  it('accepts user-agent as argument', () => {
    const instance = vi.fn(isWebview)
    instance(samples.positive[0]!)

    expect(instance).toHaveBeenCalledWith(samples.positive[0]!)
  })

  it('returns positive detection for all samples', () => {
    for (let ua of samples.positive) {
      expect(isWebview(ua)).toBe(true)
    }
  })

  it('returns negative detection for all samples', () => {
    for (let ua of samples.negative) {
      expect(isWebview(ua)).toBe(false)
    }
  })
})
