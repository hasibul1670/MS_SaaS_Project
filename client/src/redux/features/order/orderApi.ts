
import { api } from "../../api/apiSlice";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrderForAdmin: builder.query({
      query: () => `/order/all-orders`,
      transformResponse: (res: any) => res.data,
      providesTags: ["data"],
    }),
    singleOrder: builder.query({
      query: (id) => `/order/${id}`,
      providesTags: ["data"],
    }),

    createOrder: builder.mutation({
      query: ({ data }) => ({
        url: `/order/create-order`,
        method: "POST",
        body: data,
        providesTags: ["data"],
      }),
    }),

    deleteOrder: builder.mutation({
      query: ({ email, cartItemId }) => ({
        url: "/cart",
        method: "DELETE",
        body: { email: email, cartItemId: cartItemId },
      }),
    }),

    updateCart: builder.mutation({
      query: ({ email, enrolled }) => ({
        url: `/cart/update`,
        method: "PATCH",
        body: {
          enrolled: enrolled,
          email: email,
        },
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useGetAllOrderForAdminQuery,
  useUpdateCartMutation,
  useSingleOrderQuery
} = orderApi;
