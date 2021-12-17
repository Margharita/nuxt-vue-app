export default (context: any, inject: any) => {
    inject('log', () => {
        console.log('Hello from plugin!')
    })
}