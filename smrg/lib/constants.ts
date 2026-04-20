import { NavItem } from "@/types/common";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Open Access", href: "/open-access" },
  {
    label: "Journals",
    href: "/journals",
    children: [
      { label: "Explore", href: "/explore" },
      { label: "All Articles", href: "/explore/articles" },
      { label: "Exploratory Hypotheses", href: "/explore/hypotheses" },
      { label: "Lab Tours", href: "/explore/lab-tours" },
      { label: "Video Interviews", href: "/explore/videos" },
      { label: "Discussions", href: "/explore/discussions" },
      { label: "Slide Presentations", href: "/explore/slides" },
    ],
  },
  {
    label: "Submission",
    href: "/submission",
    children: [
      { label: "Article (Standard Research)", href: "/submission/article" },
      { label: "Exploratory Hypothesis", href: "/submission/hypothesis" },
      { label: "Lab Tour / Experimental Setup", href: "/submission/lab-tour" },
      { label: "Video Interview / Research Narrative", href: "/submission/video" },
      { label: "Discussion / Commentary", href: "/submission/discussion" },
      { label: "Slide Presentation / Visual Research", href: "/submission/slides" },
    ],
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    children: [
      { label: "Author Dashboard", href: "/dashboard/author" },
      { label: "Reviewer Dashboard", href: "/dashboard/reviewer" },
      { label: "Editorial Board Dashboard", href: "/dashboard/editorial" },
      { label: "Discussion Host Dashboard", href: "/dashboard/discussion-host" },
    ],
  },
  {
    label: "Guidelines",
    href: "/guidelines",
    children: [
      { label: "Author Guidelines", href: "/guidelines/author" },
      { label: "Editor Guidelines", href: "/guidelines/editor" },
      { label: "Reviewer Guidelines", href: "/guidelines/reviewer" },
      { label: "Hypothesis Publication Guidelines", href: "/guidelines/hypothesis" },
      { label: "Media Annex Guidelines", href: "/guidelines/media-annex" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Membership", href: "/services/membership" },
      { label: "Advertisement", href: "/services/advertisement" },
      { label: "Academic Writing Support", href: "/services/academic-writing-support" },
      { label: "Research Video Production", href: "/services/research-video-production" },
      { label: "Scientific Graphics Design", href: "/services/scientific-graphics-design" },
    ],
  },
  {
    label: "Publisher Policies",
    href: "/publisher-policies",
    children: [{ label: "Policies & Guidelines", href: "/publisher-policies/policies-guidelines" }],
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Discussion Hosts", href: "/careers/discussion-hosts" },
      { label: "Academic Writers", href: "/careers/academic-writers" },
      { label: "Video Editors", href: "/careers/video-editors" },
      { label: "Graphic Designers", href: "/careers/graphic-designers" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const services = [
  { title: "Membership", description: "Institutional and individual membership plans." },
  { title: "Advertisement", description: "Promote your programs and opportunities." },
  { title: "Writing Support", description: "Editorial support for manuscript quality." },
  { title: "Video Production", description: "Convert research summaries into video content." },
  { title: "Graphics Design", description: "Publication-ready visuals and infographics." },
];

export const featuredJournals = [
  {
    id: 1,
    title: "The Journal of advanced Pharmacy Education & Research",
    slug: "the-journal-of-advanced-pharmacy-education-research",
    image: "https://smrg.arditsonline.com/public/admin/Journal_Images/3601767783787.jpeg",
    publisher_name: "SMRG",
  },
  {
    id: 2,
    title: "Innovations in Intelligent Medicine and Healthcare Systems",
    slug: "innovations-in-intelligent-medicine-and-healthcare-systems",
    image: "https://smrg.arditsonline.com/public/admin/Journal_Images/4531768295389.jpeg",
    publisher_name: "SMRG",
  },
  {
    id: 3,
    title: "Neurology and Behavioral Science: A Neuropsychiatry Journal",
    slug: "neurology-and-behavioral-science-a-neuropsychiatry-journal",
    image: "https://smrg.arditsonline.com/public/admin/Journal_Images/6391767783859.jpeg",
    publisher_name: "SMRG",
  },
];
