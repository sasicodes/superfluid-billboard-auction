export type Props = {
  url: string
  name?: string
  bnw: boolean
}

let siteName = 'twitter'
let siteURL = 'twitter.com'
let defaulthover = 'Twitter Page'

let stringsToReplace: string[] = [
  'http://',
  'https://',
  'http:',
  'https:',
  'www.',
  siteURL,
  '/',
  '@',
]

export default class SMedia_Link implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const link = new Entity()
    link.setParent(host)

    if (props.bnw) {
      link.addComponent(new GLTFShape('b53e3bde-9d22-4098-8707-29a685d25a3b/models/twitter_bnw.glb'))
    } else {
      link.addComponent(new GLTFShape('b53e3bde-9d22-4098-8707-29a685d25a3b/models/twitter.glb'))
    }

    let url = parseURL(props.url)

    let locationString = props.name ? props.name : defaulthover

    link.addComponent(
      new OnPointerDown(
        async function () {
          openExternalURL(url)
        },
        {
          button: ActionButton.PRIMARY,
          hoverText: locationString,
        }
      )
    )
  }
}

export function parseURL(url: string) {
  let newURL = url.trim()

  for (let str of stringsToReplace) {
    if (newURL.substr(0, str.length) == str) {
      newURL = newURL.substring(str.length).trim()
    }
  }

  let finalURL = 'https://www.' + siteURL + '/' + newURL

  return finalURL
}
