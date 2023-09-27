import React, { useState } from "react";

function OrderModal({ showModal, handleCloseModal, handleOrderSubmit, formData, setFormData, total }) {
  const currentDate = new Date();
  const minBirthdate = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate())
    .toISOString()
    .split("T")[0];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      total_amount: total,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOrderSubmit(formData);
    handleCloseModal();
  };

  return (
    showModal && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-sm bg-white">
          <div className="w-full">
            <div className="m-6 my-20 max-w-[400px] mx-auto">
              <h1 className="mb-4 text-3xl font-extrabold text-gray-800">Ingresa tus datos para la orden</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="birthdate">Fecha de nacimiento:</label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    max={minBirthdate}
                    required
                    className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address">Dirección de envio:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone">Teléfono:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-3 mt-1 focus:border-black focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 bg-black text-white w-full font-semibold"
                >
                  Confirmar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default OrderModal;


