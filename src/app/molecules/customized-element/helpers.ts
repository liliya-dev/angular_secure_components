export const getInitialDataByType = (type: string) => {
  let initialData;
    if (type === 'table') {
      initialData = { heads: ['text 1'], tableData: [{ 'text 1' : '1.1. Text', }, { 'text 1' : '1.1. Text', }] }
    } else if (type === 'list') {
      initialData = { listTitle: 'Put list title', titles: ['Type text here'] }
    } else if (type === 'text') {
      initialData = { title: 'Your new paragraph' }
    }
  return initialData
}

export const getEditedDataByType = (type: string, props: any) => {
  let editedData;
    if (type === 'table') {
      editedData = { heads: props.heads, tableData: props.tableData }
    } else if (type === 'list') {
      editedData = { listTitle: props.listTitle, titles: props.titles }
    } else if (type === 'text') {
      editedData = { title: props.title }
    }
  return editedData
}