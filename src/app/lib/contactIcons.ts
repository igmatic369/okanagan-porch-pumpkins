import {
  Mail, Phone, MapPin, Instagram, Facebook, Linkedin,
  Globe, MessageCircle, Twitter, Youtube, Music2, Plus
} from "lucide-react"

export const CONTACT_TYPES = {
  email:     { icon: Mail,          label: "Email" },
  phone:     { icon: Phone,         label: "Phone" },
  location:  { icon: MapPin,        label: "Location" },
  instagram: { icon: Instagram,     label: "Instagram" },
  facebook:  { icon: Facebook,      label: "Facebook" },
  linkedin:  { icon: Linkedin,      label: "LinkedIn" },
  website:   { icon: Globe,         label: "Website" },
  whatsapp:  { icon: MessageCircle, label: "WhatsApp" },
  twitter:   { icon: Twitter,       label: "Twitter" },
  youtube:   { icon: Youtube,       label: "YouTube" },
  tiktok:    { icon: Music2,        label: "TikTok" },
  custom:    { icon: Plus,          label: "Custom" },
} as const

export type ContactType = keyof typeof CONTACT_TYPES

export function getContactIcon(type: string) {
  return CONTACT_TYPES[type as ContactType]?.icon ?? Plus
}
