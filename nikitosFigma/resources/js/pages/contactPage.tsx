import { Head, Link, usePage } from '@inertiajs/react';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import BottomPage from '@/components/bottomPage';
import Navbar from '@/components/navbar';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { ContactMap } from '@/components/contactMap';

export default function ContactPage({
         canRegister = true,
    }: {
        canRegister?: boolean;
    }) {
        const { auth } = usePage().props;

    
    const [form, setForm] = useState({
        razonSocial: "",
        cuit: "",
        tipoNegocio: "",
        trayectoria: "",
        direccion: "",
        localidad: "",
        telefono: "",
        celular: "",
        horario: "",
        email: "",
        observaciones: "",
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log("Formulario enviado:", form);
    }

    return (
        <>

        <div className="fixed top-0 left-0 w-full z-50">
                 <Navbar/> 
        </div>
       
        <div className="pt-20 overflow-y-auto h-screen">

                <div>
                    <div>
                        <span>Ventas ›</span>
                        <span>RR.HH.›</span>
                    </div>
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                maxWidth: "900px",
                                margin: "0 auto",
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "16px",
                            }}
                        >   
                            <div>
                            Razón social*
                            <input
                                name="razonSocial"
                                placeholder=""
                                value={form.razonSocial}
                                onChange={handleChange}
                            />
                            </div>  

                            <div>
                            CUIT*
                            <input
                                name="cuit"
                                placeholder=""
                                value={form.cuit}
                                onChange={handleChange}
                            />
                            </div>

                            <div>
                            Tipo de Negocio*
                            <input
                                name="tipoNegocio"
                                placeholder=""
                                value={form.tipoNegocio}
                                onChange={handleChange}
                            />
                            </div>

                            <div>
                            Trayectoria*
                            <input
                                name="trayectoria"
                                placeholder=""
                                value={form.trayectoria}
                                onChange={handleChange}
                            />
                            </div>

                            <div>
                            Dirección*
                            <input
                                name="direccion"
                                placeholder=""
                                value={form.direccion}
                                onChange={handleChange}
                            />
                            </div>

                            <div>
                            localidad *
                            <input
                                name="localidad"
                                placeholder=""
                                value={form.localidad}
                                onChange={handleChange}
                            />
                            </div>

                            <div>
                            Teléfono*
                            <input
                                name="telefono"
                                placeholder=""
                                value={form.telefono}
                                onChange={handleChange}
                            />
                            </div>

                            <div>
                            Celular*
                            <input
                                name="celular"
                                placeholder=""
                                value={form.celular}
                                onChange={handleChange}
                            />
                            </div>

                            <div>
                            Horario de atención*
                            <input
                                name="horario"
                                placeholder=""
                                value={form.horario}
                                onChange={handleChange}
                            />
                            </div>

                            <div>
                            Email*
                            <input
                                name="email"
                                placeholder=""
                                value={form.email}
                                onChange={handleChange}
                                style={{ gridColumn: "span 2" }}
                            />
                            </div>

                            <div>
                            Observaciones*
                            <textarea
                            name="observaciones"
                                placeholder=""
                                value={form.observaciones}
                                onChange={handleChange}
                                style={{ gridColumn: "span 2", minHeight: "120px" }}
                            />
                            </div>

                            <div>
                            *Campos obligatorios
                            </div>
                            
                            <button
                                type="submit"
                                style={{
                                    gridColumn: "span 2",
                                    padding: "12px",
                                    background: "orange",
                                    border: "none",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                }}
                            >
                                Enviar consulta
                            </button>
                        </form>
                    </div>
                </div>

                <div style={{
                        display: "flex",
                        gap: "32px",
                        maxWidth: "100%",
                        margin: "0 auto",
                        padding: "40px 0",
                        alignItems: "flex-start",
                    }}>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontWeight: 700, marginBottom: "16px" }}>
                                Datos de contacto
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "#444" }}>
                                <div>
                                    📍 Av. Otero y Gibraltar - Km 32 CP.1761<br />
                                    Pontevedra, Merlo, Buenos Aires, Argentina
                                </div>
                                <div>📞 0220.492.4752</div>
                                <div>✉️ ventas@nikitos.com.ar</div>
                                <div>🕐 Lunes a Viernes 9:00 a 17:30hs</div>
                            </div>
                        </div>

                        <div style={{ flex: 1, borderRadius: "12px", overflow: "hidden", minHeight: "260px" }}>
                            <ContactMap />
                        </div>
                    </div>

                <BottomPage/>

        </div>

            
        </>
    );
}
