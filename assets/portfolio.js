/* =============================================
   QUANTUM POSSIBILITIES — PORTFOLIO JS
   ============================================= */

'use strict';

/* ----------- PROJECT DATA (lightbox content) ----------- */
const projects = [
  {
    title: 'Local LLM Workstation',
    cat: 'AI Servers',
    desc: 'Custom-built 8× GPU server running Llama 3 and Mistral locally for a law firm — fully air-gapped, zero cloud dependency. Handles 40+ concurrent queries with sub-2s response times on a private intranet.',
    tags: ['Ollama', 'Llama 3', 'Mistral', 'Ubuntu Server', 'NVIDIA A100', 'Air-gapped'],
    gradient: 'linear-gradient(135deg, #7c6dfa 0%, #3b3a8a 100%)',
  },
  {
    title: 'Architectural Scale Models',
    cat: '3D Printing',
    desc: 'Series of 1:100 scale architectural models for a design studio — printed in multi-material PLA, hand-painted with architectural acrylics. Used for client presentations and planning submissions.',
    tags: ['FDM', 'Multi-material PLA', '1:100 scale', 'Post-processing', 'Hand-painted'],
    gradient: 'linear-gradient(135deg, #5eead4 0%, #0f766e 100%)',
  },
  {
    title: 'Product Visualization Suite',
    cat: '3D Modeling',
    desc: 'High-fidelity 3D models of industrial equipment for a manufacturing company\'s product catalogue. 14 models covering pumps, valves, and fittings — print-ready and render-optimized for Blender Cycles.',
    tags: ['Blender', 'CAD', 'Cycles render', 'PBR materials', '14 models', 'Print-ready'],
    gradient: 'linear-gradient(135deg, #f472b6 0%, #7c3aed 100%)',
  },
  {
    title: 'Inventory Automation Platform',
    cat: 'Software',
    desc: 'Full-stack web application replacing a fragile spreadsheet workflow for a 3-warehouse operation. Features real-time stock sync, USB barcode scanner integration, PDF report generation, and a role-based access system.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'WebSocket', 'Barcode scanning'],
    gradient: 'linear-gradient(135deg, #fb923c 0%, #92400e 100%)',
  },
  {
    title: 'Private RAG Pipeline',
    cat: 'AI Servers',
    desc: 'Retrieval-augmented generation system over 50,000+ internal PDF documents for a financial services firm. Uses local sentence-transformers for embeddings, Qdrant as a vector database, and a self-hosted LLM as the inference backend — completely air-gapped.',
    tags: ['RAG', 'Qdrant', 'sentence-transformers', 'vLLM', 'Python', 'Air-gapped'],
    gradient: 'linear-gradient(135deg, #818cf8 0%, #1e1b4b 100%)',
  },
  {
    title: 'Custom Enclosure Parts',
    cat: '3D Printing',
    desc: 'Batch production of precision-fit PETG enclosure components for industrial environmental sensors. Required ±0.2mm tolerances and UV-resistant coating. 200+ parts delivered across three production runs.',
    tags: ['FDM', 'PETG', '±0.2mm tolerance', 'UV-resistant', 'Batch production'],
    gradient: 'linear-gradient(135deg, #2dd4bf 0%, #134e4a 100%)',
  },
  {
    title: 'Game-Ready Environment Pack',
    cat: '3D Modeling',
    desc: '30-piece modular sci-fi corridor and room environment asset pack. Designed for Unreal Engine 5 with Lumen GI in mind. Each asset includes 3 LODs, PBR textures at 4K, and a collision mesh. Under 50k triangles per hero asset.',
    tags: ['Blender', 'Unreal Engine 5', 'PBR', '4K textures', 'LODs', '30 assets'],
    gradient: 'linear-gradient(135deg, #c084fc 0%, #4c1d95 100%)',
  },
  {
    title: '3D Print Job Manager',
    cat: 'Software',
    desc: 'Internal operations dashboard for a print farm with 12 machines. Tracks job queue, estimated completion times, material consumption per spool, and machine health. Live updates via WebSocket, with a mobile-friendly layout for floor checks.',
    tags: ['Node.js', 'React', 'WebSocket', 'SQLite', 'Tailwind', 'Mobile-first'],
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #78350f 100%)',
  },
  {
    title: 'AI-Assisted Code Review',
    cat: 'AI Servers',
    desc: 'Self-hosted LLM integration into a software team\'s GitLab CI/CD pipeline. On every merge request, the system automatically generates a PR summary, flags potential code smells, and suggests test cases — all using a local Code Llama instance. Zero code leaves the network.',
    tags: ['GitLab CI', 'Code Llama', 'Python', 'REST API', 'Self-hosted', 'Air-gapped'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #312e81 100%)',
  },
  {
    title: 'Organic Character Sculpt',
    cat: '3D Modeling',
    desc: 'High-poly character sculpt for a tabletop miniature Kickstarter series. 12M polygon ZBrush base, retopologized in Blender for clean deformation, then print-optimized with supported structures for 8K resin printers. 6 characters in the series.',
    tags: ['ZBrush', 'Blender', 'Resin-optimized', '12M poly', 'Retopology', '6 characters'],
    gradient: 'linear-gradient(135deg, #e879f9 0%, #701a75 100%)',
  },
];

/* ----------- FILTER LOGIC ----------- */
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
const visibleCount = document.getElementById('visible-count');
const noResults = document.getElementById('no-results');

function updateCount() {
  const shown = document.querySelectorAll('.project-card:not(.hidden)').length;
  visibleCount.textContent = shown;
  noResults.classList.toggle('show', shown === 0);
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    cards.forEach((card, i) => {
      const match = filter === 'all' || card.dataset.category === filter;

      if (match) {
        card.classList.remove('hidden');
        card.style.animationDelay = `${(i % 4) * 60}ms`;
        card.classList.add('fade-in');
        card.addEventListener('animationend', () => card.classList.remove('fade-in'), { once: true });
      } else {
        card.classList.add('hidden');
      }
    });

    updateCount();
  });
});

updateCount();

/* ----------- LIGHTBOX ----------- */
const lightbox   = document.getElementById('lightbox');
const lbBackdrop = document.getElementById('lb-backdrop');
const lbClose    = document.getElementById('lb-close');
const lbImg      = document.getElementById('lb-img');
const lbCat      = document.getElementById('lb-cat');
const lbTitle    = document.getElementById('lb-title');
const lbDesc     = document.getElementById('lb-desc');
const lbTags     = document.getElementById('lb-tags');

function openLightbox(idx) {
  const p = projects[idx];
  if (!p) return;

  lbImg.style.background = p.gradient;
  lbCat.textContent      = p.cat;
  lbTitle.textContent    = p.title;
  lbDesc.textContent     = p.desc;
  lbTags.innerHTML       = p.tags.map(t => `<span class="lb-tag">${t}</span>`).join('');

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

// Open via overlay buttons
document.querySelectorAll('.overlay-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    openLightbox(parseInt(btn.dataset.project, 10));
  });
});

// Also open on card image click
document.querySelectorAll('.project-img').forEach((img, idx) => {
  img.addEventListener('click', () => openLightbox(idx));
  img.style.cursor = 'pointer';
});

lbClose.addEventListener('click', closeLightbox);
lbBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ----------- IMAGE REPLACEMENT HELPER ----------- */
// To use real photos instead of placeholders:
// 1. Put your image in assets/images/project-name.jpg
// 2. Add this attribute to the .project-img div:
//    style="background-image: url('assets/images/project-name.jpg')"
//    and add class "has-photo"
// The placeholder gradient and icon will hide automatically.
