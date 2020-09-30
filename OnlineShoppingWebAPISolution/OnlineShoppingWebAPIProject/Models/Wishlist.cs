//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OnlineShoppingWebAPIProject.Models
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;

    public partial class Wishlist
    {
        public Wishlist(int userId, int productId, int? quantity)
        {
            UserId = userId;
            ProductId = productId;
            Quantity = quantity;
        }
        public Wishlist() { }

        [DataMember]public int UserId { get; set; }
        [DataMember] public int ProductId { get; set; }
        [DataMember] public Nullable<int> Quantity { get; set; }

        [IgnoreDataMember] public virtual Product Product { get; set; }
        [IgnoreDataMember] public virtual User User { get; set; }
    }
}
