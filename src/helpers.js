import { cloneElement } from 'react'
import marked from 'marked'
import DOMPurify from 'dompurify'

export function intersperse(components, componentToIntersperse, keyBase = '') {
  const result = []

  for (const key in components) {
    const component = components[key]

    const clonedComponentToIntersperse = cloneElement(componentToIntersperse, {
      key: keyBase ? `${keyBase}-${key}` : key
    })

    result.push(component, clonedComponentToIntersperse)
  }

  result.pop()

  return result
}

export const safeMarkdown = markdown => marked(DOMPurify.sanitize(markdown))

export const toSlug = string => string.toLowerCase().replace(/ /g, '-')
