package com.hilel.factures.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.hilel.factures.entities.Boutique;
import com.hilel.factures.entities.Facture;
import com.hilel.factures.repos.FactureRepository;
@Service
public class FactureServiceImpl implements FactureService {
@Autowired
FactureRepository factureRepository;
@Override
public Facture saveFacture(Facture f) {
return factureRepository.save(f);
}
@Override
public Facture updateFacture(Facture f) {
return factureRepository.save(f);
}
@Override
public void deleteFacture(Facture f) {
	factureRepository.delete(f);
}
 @Override
public void deleteFactureById(Long id) {
	 factureRepository.deleteById(id);
}
@Override
public Facture getFacture(Long id) {
return factureRepository.findById(id).get();
}


@Override
public List<Facture> getAllFactures() {
return factureRepository.findAll();
}

@Override
public Page<Facture> getAllFActuresParPage(int page, int size) {
	return factureRepository.findAll(PageRequest.of(page, size));
	
}
@Override
public List<Facture> findByNomFacture(String nom) {
	return factureRepository.findByNomFacture(nom);
}
@Override
public List<Facture> findByNomFactureContains(String nom) {
	return factureRepository.findByNomFactureContains(nom);
}
@Override
public List<Facture> FindByNomTva(String nom, Double tva) {
	return factureRepository.FindByNomTva(nom, tva);
}
@Override
public List<Facture> findByBoutique(Boutique boutique) {
	return factureRepository.findByBoutique(boutique);
}
@Override
public List<Facture> findByBoutiqueIdBou(Long id) {
	return factureRepository.findByBoutiqueIdBou(id);
}
@Override
public List<Facture> findByOrderByNomFactureAsc() {
	return factureRepository.findByOrderByNomFactureAsc();
}
@Override
public List<Facture> trierFacturesNomsTva() {
	return factureRepository.trierFacturesNomsTva();
}
}
