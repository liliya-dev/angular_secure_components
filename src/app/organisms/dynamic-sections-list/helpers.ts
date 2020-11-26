export const defineComponentType = (name: string) => {
  switch(name) {
    case 'DynamicTextComponent':
      return 'text';
    case 'DynamicTableComponent': 
      return 'table';
    case 'DynamicListComponent':
      return 'list'
  }
}