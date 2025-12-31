interface InfosProps {
  zone: string
  modalites: string[]
  disponibilites: string
}

export default function Infos({ zone, modalites, disponibilites }: InfosProps) {
  const infos = [
    { icon: '📍', title: 'Zone géographique', value: zone },
    { icon: '💻', title: 'Modalités', value: modalites.join(', ') },
    { icon: '📅', title: 'Disponibilités', value: disponibilites },
  ]

  return (
    <section className="py-24 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[32px] font-medium mb-4 text-textPrimary">
            Informations pratiques
          </h2>
          <p className="text-lg text-textSecondary">Tout ce que vous devez savoir</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {infos.map((info, index) => (
            <div
              key={index}
              className="card p-8 text-center card-hover"
            >
              <div className="text-5xl mb-6">
                {info.icon}
              </div>
              <h3 className="font-semibold text-lg text-textPrimary mb-3">{info.title}</h3>
              <p className="text-base text-textSecondary">{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
