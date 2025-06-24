"use client";
import styles from "../page.module.css";
import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Section from "../components/Section";
import HomeIntroSection from "../components/HomeIntroSection";

const coaches = [
  {
    nombre: "Juan Pérez",
    edad: 35,
    federacion: "FEB",
    experiencia: 10,
    clubes: [
      { nombre: "CB Estudiantes", categoria: "U16" },
      { nombre: "CB Fuenlabrada", categoria: "U18" },
    ],
  },
  {
    nombre: "María García",
    edad: 29,
    federacion: "FEB",
    experiencia: 6,
    clubes: [
      { nombre: "CB Sevilla", categoria: "U14" },
    ],
  },
  {
    nombre: "Carlos López",
    edad: 42,
    federacion: "FEB",
    experiencia: 18,
    clubes: [
      { nombre: "CB Zaragoza", categoria: "Senior" },
      { nombre: "CB Murcia", categoria: "U18" },
    ],
  },
  {
    nombre: "Ana Torres",
    edad: 33,
    federacion: "FEB",
    experiencia: 12,
    clubes: [
      { nombre: "CB Valencia", categoria: "U12" },
      { nombre: "CB Castellón", categoria: "U16" },
    ],
  },
  {
    nombre: "Miguel Sánchez",
    edad: 38,
    federacion: "FEB",
    experiencia: 15,
    clubes: [
      { nombre: "CB Málaga", categoria: "U18" },
    ],
  },
  {
    nombre: "Lucía Fernández",
    edad: 27,
    federacion: "FEB",
    experiencia: 5,
    clubes: [
      { nombre: "CB Burgos", categoria: "U14" },
    ],
  },
  {
    nombre: "Pedro Ruiz",
    edad: 45,
    federacion: "FEB",
    experiencia: 22,
    clubes: [
      { nombre: "CB Bilbao", categoria: "Senior" },
      { nombre: "CB Vitoria", categoria: "U18" },
    ],
  },
  {
    nombre: "Sofía Martínez",
    edad: 31,
    federacion: "FEB",
    experiencia: 9,
    clubes: [
      { nombre: "CB Girona", categoria: "U16" },
    ],
  },
  {
    nombre: "David Gómez",
    edad: 36,
    federacion: "FEB",
    experiencia: 13,
    clubes: [
      { nombre: "CB León", categoria: "U18" },
      { nombre: "CB Oviedo", categoria: "U14" },
    ],
  },
  {
    nombre: "Elena Navarro",
    edad: 28,
    federacion: "FEB",
    experiencia: 7,
    clubes: [
      { nombre: "CB Lugo", categoria: "U12" },
    ],
  },
];

const AUTONOMOUS_COMMUNITIES = [
  { name: "Andalucía", provinces: ["Almería", "Cádiz", "Córdoba", "Granada", "Huelva", "Jaén", "Málaga", "Sevilla"] },
  { name: "Aragón", provinces: ["Huesca", "Teruel", "Zaragoza"] },
  { name: "Asturias", provinces: ["Asturias"] },
  { name: "Islas Baleares", provinces: ["Islas Baleares"] },
  { name: "Canarias", provinces: ["Las Palmas", "Santa Cruz de Tenerife"] },
  { name: "Cantabria", provinces: ["Cantabria"] },
  { name: "Castilla y León", provinces: ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"] },
  { name: "Castilla-La Mancha", provinces: ["Albacete", "Ciudad Real", "Cuenca", "Guadalajara", "Toledo"] },
  { name: "Cataluña", provinces: ["Barcelona", "Girona", "Lleida", "Tarragona"] },
  { name: "Comunidad Valenciana", provinces: ["Alicante", "Castellón", "Valencia"] },
  { name: "Extremadura", provinces: ["Badajoz", "Cáceres"] },
  { name: "Galicia", provinces: ["A Coruña", "Lugo", "Ourense", "Pontevedra"] },
  { name: "Madrid", provinces: ["Madrid"] },
  { name: "Murcia", provinces: ["Murcia"] },
  { name: "Navarra", provinces: ["Navarra"] },
  { name: "País Vasco", provinces: ["Álava", "Guipúzcoa", "Vizcaya"] },
  { name: "La Rioja", provinces: ["La Rioja"] },
  { name: "Ceuta", provinces: ["Ceuta"] },
  { name: "Melilla", provinces: ["Melilla"] },
];

const EXPERIENCIAS = [
  "< 2 años",
  "2-5 años",
  "6-10 años",
  "11-15 años",
  "> 15 años",
];

const CATEGORIAS = [
  "U10", "U12", "U14", "U16", "U18", "Senior"
];

const TIPOS_EQUIPO = [
  { value: "male", label: "Masculino" },
  { value: "female", label: "Femenino" },
];

export default function Directorio() {
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipoEquipo, setTipoEquipo] = useState("");

  const provinces = selectedCommunity
    ? AUTONOMOUS_COMMUNITIES.find(c => c.name === selectedCommunity)?.provinces || []
    : [];

  // Light theme CSS variables
  const lightThemeVars = {
    '--color-bg': '#f9fafb',
    '--color-bg-alt': '#fff',
    '--color-surface': '#f3f4f6',
    '--color-border': '#e5e7eb',
    '--color-text': '#1a1a1a',
    '--color-text-light': '#6b7280',
    '--color-accent': '#2563eb',
    '--color-accent-dark': '#1e40af',
    '--color-accent-light': '#dbeafe',
  };

  // Filtering logic
  const filteredCoaches = coaches.filter(coach => {
    // Federación Autonómica (community) and Región (province) are not directly in coach, so skip for now
    // Experiencia: map years to range
    let experienciaMatch = true;
    if (experiencia) {
      if (experiencia === '< 2 años') experienciaMatch = coach.experiencia < 2;
      else if (experiencia === '2-5 años') experienciaMatch = coach.experiencia >= 2 && coach.experiencia <= 5;
      else if (experiencia === '6-10 años') experienciaMatch = coach.experiencia >= 6 && coach.experiencia <= 10;
      else if (experiencia === '11-15 años') experienciaMatch = coach.experiencia >= 11 && coach.experiencia <= 15;
      else if (experiencia === '> 15 años') experienciaMatch = coach.experiencia > 15;
    }
    // Categoría: at least one club with that category
    let categoriaMatch = true;
    if (categoria) {
      categoriaMatch = coach.clubes.some(club => club.categoria === categoria);
    }
    // Tipo de equipo: not implemented in data, so skip
    // Comunidad y provincia: not implemented in data, so skip
    return experienciaMatch && categoriaMatch;
  });

  return (
    <div className="container" style={{ paddingTop: "var(--space-xl)" }}>
      <HomeIntroSection
        title="Coach Directory"
        style={{ color: "var(--color-accent)" }}
        className="mb-lg"
      />
      {/* Filter/Search Form */}
      <Section className="mb-lg">
        <form className="flex gap-md flex-wrap" onSubmit={e => e.preventDefault()} style={{ justifyContent: "center" }}>
          <div>
            <label className="text-muted" htmlFor="community">Autonomous Community</label><br />
            <select id="community" value={selectedCommunity} onChange={e => { setSelectedCommunity(e.target.value); setSelectedProvince(""); }}>
              <option value="">All</option>
              {AUTONOMOUS_COMMUNITIES.map(c => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-muted" htmlFor="province">Province</label><br />
            <select id="province" value={selectedProvince} onChange={e => setSelectedProvince(e.target.value)} disabled={!selectedCommunity}>
              <option value="">All</option>
              {provinces.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-muted" htmlFor="experience">Experience</label><br />
            <select id="experience" value={experiencia} onChange={e => setExperiencia(e.target.value)}>
              <option value="">All</option>
              {EXPERIENCIAS.map(e => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-muted" htmlFor="category">Category</label><br />
            <select id="category" value={categoria} onChange={e => setCategoria(e.target.value)}>
              <option value="">All</option>
              {CATEGORIAS.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-muted" htmlFor="teamType">Team Type</label><br />
            <select id="teamType" value={tipoEquipo} onChange={e => setTipoEquipo(e.target.value)}>
              <option value="">All</option>
              {TIPOS_EQUIPO.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </form>
      </Section>
      <div className="mb-md flex gap-md" style={{ alignItems: "center" }}>
        <span className="text-muted">Results: {filteredCoaches.length}</span>
        <span className="text-muted" style={{ marginLeft: "var(--space-md)" }}>Sort by: <b>Most recent</b></span>
      </div>
      <div className="flex flex-col gap-md">
        {filteredCoaches.length === 0 && (
          <Card className="text-center text-muted">No coaches found matching your criteria.</Card>
        )}
        {filteredCoaches.map((coach, idx) => (
          <Card key={idx}>
            <div className="flex gap-lg" style={{ alignItems: "center" }}>
              <div style={{ flex: 1 }}>
                <h2 className="text-lg" style={{ fontWeight: 600 }}>{coach.nombre}</h2>
                <div className="text-muted mb-sm">{coach.federacion} &bull; {coach.edad} years &bull; {coach.experiencia} years exp.</div>
                <div>
                  <b>Clubs:</b> {coach.clubes.map((club, i) => (
                    <span key={i}>{club.nombre} ({club.categoria}){i < coach.clubes.length - 1 ? ", " : ""}</span>
                  ))}
                </div>
              </div>
              <div>
                <Button variant="primary">View Profile</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 