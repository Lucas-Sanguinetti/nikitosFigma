import { Link, router, usePage } from '@inertiajs/react';
import React, { useState, useRef, useEffect } from "react";

export default function Navbar() { 

    const menuItemsEnabled = [{name : "home", route: "/"},
                              {name : "productos", route: "/productos"},
                              {name : "donde comprar", route: "/donde-comprar"},
                              {name : "recetas", route: "/recetas"},
                              {name : "nosotros", route: "/nosotros"},
                              {name : "contacto", route: "/contacto"}]

    const [loginAbierto, setLoginAbierto] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { errors } = usePage().props as any;
    const dropdownRef = useRef<HTMLDivElement>(null);

    function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        router.post('/login', { email, password });
    }

    useEffect(() => {
        function handleClickFuera(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setLoginAbierto(false);
            }
        }

        if (loginAbierto) {
            document.addEventListener('mousedown', handleClickFuera);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickFuera);
        };
    }, [loginAbierto]);

    return (
        <> 
            <div style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                <Link href={"/"}> 
                    <img src="/images/logo.png" alt="Logo" style={{ height: '40px' }} />
                </Link> 
                <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                    {menuItemsEnabled.map((item) => (
                        <li key={item.route}>
                            <Link href={item.route}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div style={{ position: 'relative' }} ref={dropdownRef}>
                    <button onClick={() => setLoginAbierto(!loginAbierto)}>
                        Iniciar sesión
                    </button>

                    {loginAbierto && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            right: 0,
                            background: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            zIndex: 100,
                            minWidth: '260px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#000' }}
                            />
                            {errors?.email && <p style={{ color: 'red', margin: 0 }}>{errors.email}</p>}

                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#000' }}
                            />
                            {errors?.password && <p style={{ color: 'red', margin: 0 }}>{errors.password}</p>}

                            <button
                                onClick={handleLogin}
                                style={{ padding: '8px', borderRadius: '4px', background: '#000', color: '#fff', cursor: 'pointer' }}
                            >
                                Entrar
                            </button>


                        </div>
                    )}

                    
                </div>

            </div>
        </>
    ); 
}