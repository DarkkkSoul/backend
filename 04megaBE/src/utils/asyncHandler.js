export const asyncHandler = (requestHandler) => {
   return (response, request, next) => {
      Promise
         .resolve(requestHandler(response, request, next))
         .catch((err) => next(err));
   }
}