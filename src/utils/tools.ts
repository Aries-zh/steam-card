import { getImage } from '../request/steamApi'

export const imageUrl2Base64 = async (url: string): Promise<string> => {
  let image: any = await getImage(url)
  let _base64 = Buffer.from(image).toString('base64')
  return _base64
}

export const string2Boolean = (value: string) => {
  return value === 'true'
}

export const themeFormat = (value: string) => {
  return value === 'light' ? 'light' : 'dark'
}
