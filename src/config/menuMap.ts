export interface MenuMapItem {
  index : string;
  title: string;
  icon?: string;
  children?: MenuMapItem[]
}

export default [
  { index: "/dashboard", title: "Главная", icon: "majesticons:home-line" },
  { index: "/documents", title: "Документы", icon: "majesticons:file-text-line" },
  {
    index: "/nested", title: "Nested", icon: "majesticons:applications-add-line", children: [
      { index: "/nested/nested-item", icon: "majesticons:chevron-right-line", title: "Nested Item" },
      { index: "/nested/nested-module", icon: "majesticons:chevron-right-line", title: "Nested Module" },
      {
        index: "/nested/more-nested", icon: "majesticons:chevron-right-line", title: "More Nested", children: [
          { index: "/nested/more-nested/another-nested", icon: "majesticons:chevron-right-line", title: "Another Nested" },
        ]
      }
    ]
  },
] as MenuMapItem[]
