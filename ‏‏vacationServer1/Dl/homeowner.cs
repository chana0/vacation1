//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dl
{
    using System;
    using System.Collections.Generic;
    
    public partial class homeowner
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public homeowner()
        {
            this.vacationApartment = new HashSet<vacationApartment>();
        }
    
        public decimal id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string identityCode { get; set; }
        public string password { get; set; }
        public string tel { get; set; }
        public string pel { get; set; }
        public string email { get; set; }
        public string city { get; set; }
        public string street { get; set; }
        public decimal houseNumber { get; set; }
        public string postalCode { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<vacationApartment> vacationApartment { get; set; }
    }
}
