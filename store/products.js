import { defineStore } from "pinia";
import { axiosApi } from "~/config/axios";

export const useProductsStore = defineStore('products', {
    state: () => ({
        loading: false,
        five: null,
        products:[]
    }),
    actions: {
        async fetchProducts() {
            try {
                this.loading = true
                const response = await axiosApi.get('/products?limit=4');

                if (response.status == 200) {
                    this.five = response.data;
                }

            }
            catch (e) {
                console.log(e)
            }
            finally {
                this.loading = false;
            }
        },

        async fetchAllProducts(){
            try{
                this.loading = true
                const response = await axiosApi.get('/products');

                if(response.status == 200){
                    this.products = response.data;
                }
            }
            catch(e){
                connsole.log("Error Fetching Data.")
            }
            finally{
                this.loading = false
            }
        }
        
    }
})